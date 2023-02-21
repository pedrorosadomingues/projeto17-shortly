import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    
    if (!authorization) {
        return res.status(401).send("Unauthorized");
    }

    const token = authorization.split(" ")[1];

    try {
        const { id, name } = jwt.verify(token, process.env.JWT_SECRET);
        res.locals = { id, name };
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send("Unauthorized");
    }

};
