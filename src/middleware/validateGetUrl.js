import { db } from '../database/database.connection.js';

export const validateGetUrl = async (req, res, next) => {
    const { id , shortUrl} = req.params;
    const param = id || shortUrl;
    const type = id ? "id" : "shortUrl";

    try {
        const checkUrl = await db.query(`SELECT urls.id, urls.\"shortUrl\", urls.url FROM urls WHERE \"${type}\" = $1`, [param]);

        if (checkUrl.rows.length === 0) {
            return res.status(404).send("Url not found");
        }

        const urlInfo = checkUrl.rows[0];

        res.locals = { urlInfo };

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}