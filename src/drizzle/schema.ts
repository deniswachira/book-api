
import { pgTable, text,serial,timestamp ,integer} from "drizzle-orm/pg-core";


export const bookTable =  pgTable('bookTable',{
    bookId: serial('bookId').primaryKey(),
    bookName: text('bookName'),
    bookYear: integer('bookYear'),
    createdAt: timestamp('createdAt').defaultNow(),
    updatedAt: timestamp('updatedAt').defaultNow(),
})

export type TBookInsert = typeof bookTable.$inferInsert;
export type TBookSelect = typeof bookTable.$inferSelect