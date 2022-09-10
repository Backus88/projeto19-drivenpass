import { getUniqueEmail, insertUser } from "../repositories/authRepository";
import { notPossibleOperation, notFoundError } from "../utils/errorMessages";
import { InsertUser } from "../types/types";
import {cryptInfo, descryptInfo} from '../utils/bcryptInfo';
import generateJwtToken from '../utils/generateJwtToken';

export async function checkEmailIsUnique (email:string){
    const thereIsEmail = await getUniqueEmail(email)
    if(thereIsEmail){
        throw notPossibleOperation('email already exists');
    }
}

export async function createNewUser (user:InsertUser){
    user.password = await cryptInfo(user.password);
    await insertUser(user);
}

export async function checkPassword (user: InsertUser){
    const realUser = await getUniqueEmail(user.email);
    if(!realUser){
        throw notFoundError('email');
    }
    const isAuthorized= await descryptInfo(user.password,realUser.password);
    if(!isAuthorized){
        throw notPossibleOperation('email and password doesnt match!!');
    }
    return realUser;
}

export async function getToken(userId : number){
    return generateJwtToken(userId);
}