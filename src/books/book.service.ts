
import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { bookTable, TBookInsert, TBookSelect } from "../drizzle/schema";


//CRUD Operations for Book entity
//Get all users
export const getBooksServices = async():Promise<TBookSelect[] | null> => {
    return await db.query.bookTable.findMany();
}

//Get Book by ID
export const getBookByIdServices = async(bookId: number):Promise<TBookSelect | undefined> => {
     return await db.query.bookTable.findFirst({
        where: eq(bookTable.bookId, bookId)
    })  
}

// Create a Book
export const createBookServices = async(book: TBookInsert):Promise<string> => {
    await db.insert(bookTable).values(book).returning();
    return "Book created successfully 🎉";
}

// Update an existing user
export const updateBookServices = async(bookId: number, book: Partial<TBookInsert>):Promise<string> => {
    await db.update(bookTable).set(book).where(eq(bookTable.bookId, bookId));
    return "Book updated successfully 😎";
}


// Delete a book

export const deleteBookServices = async(bookId: number):Promise<string> => {
  await db.delete(bookTable).where(eq(bookTable.bookId, bookId));
  return "Book deleted successfully 🎉"
}