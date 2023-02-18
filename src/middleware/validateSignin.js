import { db } from '../database/database.connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const validateSignin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return res.status(401).send("Invalid Credentials");
        }

        const isMatch = bcrypt.compareSync(password, user.rows[0].password);
        if (!isMatch) {
            return res.status(401).send("Invalid Credentials");
        }

        const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h'});
        res.locals = { token };
        next();
        
    } catch (error) {
        console.log(error);

        res.status(500).send("Server Error");
    }


}