import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload{
    sub: string
}

export function isSameUser(req: Request, res: Response, next: NextFunction){
    const authToken = req.headers.authorization

    if(!authToken){
       return res.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try{
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload

        req.user_id = sub

        const requestUserId = req.params.user_id || req.body.user_id || req.query.user_id;
        
        if (req.user_id !== requestUserId) {
            return res.status(403).json({ error: "User ID does not match" }).end();
        }

        console.log("User ID from token: " + req.user_id);
        console.log("Authorization token: " + authToken);
        
        return next()

    }catch(err){
        return res.status(401).end()
    }
    
    
}