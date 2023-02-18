import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const validateToken = (req, res, next) => {
    const { Authorization } = req.headers;
    if (!Authorization) {
        return res.status(401).send("Unauthorized");
    }
    
    const token = Authorization.split(" ")[1];

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        res.locals = { id };
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("Unauthorized");
    }

};
