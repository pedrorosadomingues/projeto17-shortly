import { db } from '../database/database.connection.js';

export const validateDeleteUrl = async (req, res, next) => {

    const { id } = req.params;

    const userId = res.locals.id;

    try {
        const checkUrl = await db.query("SELECT * FROM urls WHERE id = $1" , [id]);

        if (checkUrl.rows.length === 0) {
            return res.status(404).send("Url not found");
        }
        if (checkUrl.rows[0].userId !== userId) {
            return res.status(401).send("Unauthorized");
        }
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}