import { Users, Credentials, SafetyNotes } from "@prisma/client";

//Users Types
export type InsertUser  = Omit<Users, 'id'>;

//Credentials Types
export type insertCredentials = Omit<Credentials, 'id'>;
export type schemaCredentials = Omit<Credentials, 'id'| 'userId'>;

//Notes Types
export type insertNotes = Omit<SafetyNotes, 'id'>;
export type schemaNotes = Omit<SafetyNotes, 'id'| 'userId'>;