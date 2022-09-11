import {Request, Response, NextFunction} from 'express';

export default function validateCardType(req : Request, res: Response, next: NextFunction){
    const types : string [] = ['Debit', 'Credit', 'Both'];
    const {type} = req.body;
    for(const v of types){
        if(v === type){
            next()
            return;
        } 
    }
    res.status(404).send("type not found");
    return;
} 