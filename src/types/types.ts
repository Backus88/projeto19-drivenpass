import { Users, Credentials, SafetyNotes, Cards, Wifi } from "@prisma/client";

//Users Types
export type InsertUser  = Omit<Users, 'id'>;

//Credentials Types
export type insertCredentials = Omit<Credentials, 'id'>;
export type schemaCredentials = Omit<Credentials, 'id'| 'userId'>;

//Notes Types
export type insertNotes = Omit<SafetyNotes, 'id'>;
export type schemaNotes = Omit<SafetyNotes, 'id'| 'userId'>;

//Card Types
export type insertCards = Omit<Cards, 'id'>;
export type schemaCards = Omit<Cards, 'id' | 'userId'>;

//Wifi Types
export type insertWifis = Omit<Wifi, 'id'>;
export type schemaWifis = Omit<Wifi, 'id' | 'userId'>;