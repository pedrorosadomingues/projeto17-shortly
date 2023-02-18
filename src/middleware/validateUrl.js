import { db } from '../database/database.connection.js';

export const validateUrl = async (req, res, next) => {
    const { url } = req.body;

    try {
        const checkUrl = await db.query("SELECT * FROM urls WHERE url = $1", [url]);

        if (checkUrl.rows.length > 0) {
            return res.status(422).send("Url already exists");
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}