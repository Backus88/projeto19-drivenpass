import { Users, Credentials } from "@prisma/client";

export type InsertUser  = Omit<Users, 'id'>;
export type insertCredentials = Omit<Credentials, 'id'>;
export type schemaCredentials = Omit<Credentials, 'id'| 'userId'>;