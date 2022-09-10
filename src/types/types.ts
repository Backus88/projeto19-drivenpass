import { Users } from "@prisma/client";

export type InsertUser  = Omit<Users, 'id'>