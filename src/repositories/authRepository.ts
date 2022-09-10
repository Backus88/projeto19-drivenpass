import client from "../config/database";
import { InsertUser } from "../types/types";
import { Users } from "@prisma/client";

export async function getUniqueEmail(email: string):Promise<Users| null>{
    return await client.users.findUnique({
        where:{
            email: email
        }
    })
}

export async function insertUser(user : InsertUser){
    await client.users.create({data: user})
}