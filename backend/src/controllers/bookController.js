const Book = require("../models/book.js");

const addBook = async (req, res) => {
  const { title, author } = req.body;
  try {
    const book = await Book.create({ title, author, userId: req.user.id });
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: "Error adding book" });
  }
};

const getBooks = async (req, res) => {
  const books = await Book.findAll({ where: { userId: req.user.id } });
  res.json(books);
};

const editBook = async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = await Book.findOne({ where: { id, userId: req.user.id } });

  if (!book) return res.status(404).json({ error: "Book not found" });

  book.title = title;
  book.author = author;
  await book.save();
  res.json(book);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findOne({ where: { id, userId: req.user.id } });

  if (!book) return res.status(404).json({ error: "Book not found" });

  await book.destroy();
  res.json({ message: "Book deleted" });
};

module.exports = { addBook, getBooks, editBook, deleteBook };
