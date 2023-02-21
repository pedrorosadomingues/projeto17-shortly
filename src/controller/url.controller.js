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

export const getUrlById = async (req, res) => {
    
    const urlInfo = res.locals.urlInfo;

    res.status(200).json(urlInfo);
  
}


export const redirectToUrl = async (req, res) => {
    
    const urlInfo = res.locals.urlInfo;

    const url = urlInfo.url;

    try {
        
        await db.query("UPDATE urls SET \"totalClicks\" = \"totalClicks\" + 1 WHERE id = $1", [urlInfo.id]);
        res.redirect(url);
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
}

export const deleteUrlById = async (req, res) => {
    
    const shortUrlId = req.params.id;

    try {
        await db.query("DELETE FROM urls WHERE id = $1", [shortUrlId]);
        res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }

}