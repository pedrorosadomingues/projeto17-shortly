import  { db } from '../database/database.connection.js';
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

export const getShortenedUrlsByUser = async (req, res) => {

    const {id, name} = res.locals

    try {
        const sumTotalClicks = await db.query("SELECT SUM(\"totalClicks\") AS \"visitCount\" FROM urls WHERE \"userId\" = $1", [id]);

        const userUrls = await db.query("SELECT id, \"shortUrl\", url, \"totalClicks\" AS  \"visitCount\" FROM urls WHERE \"userId\" = $1", [id]);
        
        const bodyReturn = {
            id,
            name,
            visitCount: sumTotalClicks.rows[0].visitCount,
            shortenedUrls: userUrls.rows
        }

        res.status(200).json(bodyReturn);
       
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

export const getRanking = async (req, res) => {

    try {
        const ranking = await db.query("SELECT users.id, users.name,  COUNT(urls.\"userId\") AS \"linksCount\", SUM(urls.\"totalClicks\") AS \"visitCount\" FROM users INNER JOIN urls ON users.id = urls.\"userId\" GROUP BY users.id ORDER BY \"visitCount\" DESC LIMIT 10");

        res.status(200).json(ranking.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}