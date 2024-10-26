import express from "express";
import { createBook, deleteBook, getBook, getBooks, updateBook } from "../controllers/books/booksController.js";
const bookRoutes = express.Router();
//  now calling books controllers
//  getbooks
bookRoutes.get("/", getBooks)
//  createbook
bookRoutes.post("/create-book", createBook)
// get a single book
bookRoutes.get("/:id", getBook)
// delete book
bookRoutes.delete("/delete-book/:id", deleteBook)
// update a book
bookRoutes.put("/:id", updateBook)

export default bookRoutes;
