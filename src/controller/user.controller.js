import { db } from '../database/database.connection.js';
import bcrypt from 'bcrypt';

export const createUser = async (req, res) => {
    const { name, email, password } = res.locals.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        await db.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [name, email, hashedPassword]);
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

export const userLogin = async (req, res) => {
    const { token } = res.locals;

    res.status(200).send({ token });

}