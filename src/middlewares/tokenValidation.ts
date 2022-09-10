import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import {notFoundError, notAuthorized} from '../utils/errorMessages';

dotenv.config();

export default function credentialsValidation(req: Request, res : Response, next: NextFunction) {
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');
    if(!token){
        throw notFoundError('token');
    }
    const key = process.env.SECRET_KEY;

    if(!key){
        throw notFoundError('key');
    }

    jwt.verify(token, key, (err, payload)=>{
      if (err) {
        throw notAuthorized('password');
      }
      res.locals ={
        payload: payload
      };
      return;
    });
    
    next();
  }