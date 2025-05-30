import express, { Application,Response } from 'express';
import dotenv from 'dotenv';
import { bookRouter } from './books/book.route';

dotenv.config();

const app = express();

//Basic Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

//Default route
app.get('/',(req, res:Response) => {
  res.send("Welcome to Express API Backend WIth Drizzle ORM and PG DB");
})

app.use('/api',bookRouter)

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
 });