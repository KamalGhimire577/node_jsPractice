const express = require("express");
const router = express.Router();

const {
  fetchBook,
  addBook,
  deleteBook,
  editBook,
  getBookById,
} = require("../controllers/bookController.js");

// GET all books and POST new book
router.route("/").get(fetchBook).post(addBook);

// GET one book, UPDATE and DELETE by id
router.route("/:id").get(getBookById).patch(editBook).delete(deleteBook);

module.exports = router;
