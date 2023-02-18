import { db } from '../database/database.connection.js';
import { nanoid } from 'nanoid';

export const shortenUrl = async (req, res) => {
    
    const { url } = req.body;
    url.id = nanoid();
    try {
       const { id, shortUrl} = await db.query("INSERT INTO urls (shortUrl, url) VALUES ($1, $2) RETURNING urls.id, url.shortUrl", [url.id, url]);

         res.status(201).send({ id, shortUrl });

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }

}