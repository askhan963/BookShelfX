import mongoose from "mongoose";
import Book from "../../models/Books/BooksModel.js";

// Get all books controller
const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving books" });
    }
};

// Create a new book controller
const createBook = async (req, res) => {
    const { title, author, description, category, trending, coverImage, oldPrice, newPrice } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: "Title and author are required" });
    }

    const book = new Book({
        title,
        author,
        description,
        category,
        trending,
        coverImage,
        oldPrice,
        newPrice,
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Cannot create a book" });
    }
};

// Get a single book by ID controller
const getBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: "Invalid book ID" });
    }

    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving book" });
    }
};

// Update a book by ID controller
const updateBook = async (req, res) => {
    const { id } = req.params;
    const { title, description, category, trending, coverImage, oldPrice, newPrice } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No book with id: ${id}` });
    }

    const updatedBook = {
        title,
        description,
        category,
        trending,
        coverImage,
        oldPrice,
        newPrice,
        _id: id,
    };

    try {
        const result = await Book.findByIdAndUpdate(id, updatedBook, { new: true });
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Cannot update the book" });
    }
};

// Delete a book by ID controller
const deleteBook = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: `No book with id: ${id}` });
    }
    try {
        const result = await Book.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Cannot delete book" });
    }
};

// Export controllers
export { getBooks, createBook, getBook, updateBook, deleteBook };
