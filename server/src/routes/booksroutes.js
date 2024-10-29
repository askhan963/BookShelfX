import express from "express";
import { createBook, deleteBook, getBook, getBooks, updateBook } from "../controllers/books/booksController.js";
import {verifyAdminToken} from '../middlewares/verifyAdminToken.js'
const bookRoutes = express.Router();
//  now calling books controllers
//  getbooks
bookRoutes.get("/", getBooks)
//  createbook
bookRoutes.post("/create-book",verifyAdminToken, createBook)
// get a single book
bookRoutes.get("/:id", getBook)
// delete book
bookRoutes.delete("/delete-book/:id",verifyAdminToken, deleteBook)
// update a book
bookRoutes.put("/:id",verifyAdminToken, updateBook)

export default bookRoutes;
