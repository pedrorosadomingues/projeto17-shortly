import { db } from '../database/database.connection.js';
import { nanoid, customAlphabet } from 'nanoid';

export const shortenUrl = async (req, res) => {

    const { url } = req.body;
    const nanoid = customAlphabet(url, 5);
    const shortenUrl = nanoid();
    const userId = res.locals.id;

    try {
        const returnUrl = await db.query("INSERT INTO urls (\"shortUrl\", url, \"userId\") VALUES ($1, $2, $3) RETURNING urls.id, urls.\"shortUrl\"", [shortenUrl, url, userId]);

        res.status(201).json(returnUrl.rows[0]);

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }

}