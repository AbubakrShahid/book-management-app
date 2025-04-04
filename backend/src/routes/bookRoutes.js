const express = require("express");
const {
  addBook,
  getBooks,
  editBook,
  deleteBook,
} = require("../controllers/bookController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/", authMiddleware, addBook);
router.get("/", authMiddleware, getBooks);
router.put("/:id", authMiddleware, editBook);
router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;
