import { Router } from "express";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "./book.controller";

export const bookRouter = Router();



bookRouter.get('/books',getBooks)
bookRouter.get('/books/:id',getBookById)
bookRouter.post('/books',createBook)
bookRouter.put('/books/:id',updateBook)
bookRouter.delete('/books/:id',deleteBook)
