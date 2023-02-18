import { db } from '../database/database.connection.js';

export async function validateSignup(req, res, next) {
    const { email } = req.body;
    const user = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (user.rowCount > 0) {
        return res.status(409).send("Email already exists");
    }
    res.locals.body = req.body;
    next();
}