import { PrismaClient } from "@/prisma/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// const libsql = createClient({
// 	url: `${process.env.TURSO_DATABASE_URL}`,
// 	authToken: `${process.env.TURSO_AUTH_TOKEN}`,
// });

export const adapter = new PrismaBetterSqlite3({
	url: `${process.env.TURSO_DATABASE_URL}`,
	authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});
export const prisma = new PrismaClient({ adapter });
