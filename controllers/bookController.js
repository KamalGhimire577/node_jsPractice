const { books } = require("../database/connection");

exports.fetchBook = async function ( req, res) {
  try {
    const datas = await books.findAll();
    res.status(200).json({
      message: "Books fetched successfully",
      datas
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
};

exports.addBook = async function (req, res) {
  try {
    const { bookName, bookPrice, bookAuthor } = req.body;

    if (!bookName || !bookPrice || !bookAuthor) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await books.create({ bookName, bookPrice, bookAuthor });

    res.status(201).json({
      message: "Book created successfully",
    });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ error: "Failed to create book" });
  }
};

// ✅ Add these if using routes for /:id
exports.getBookById = async function (req, res) {
  try {
    const book = await books.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    res.status(200).json({
      data: {
        datas: book, // still using the same nested format
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch book" });
  }
};


exports.editBook = async function (req, res) {
  try {
    const { id } = req.params;
    const { bookName, bookPrice, bookAuthor } = req.body;

    const book = await books.findByPk(id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    await book.update({ bookName, bookPrice, bookAuthor });

    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update book" });
  }
};

exports.deleteBook = async function (req, res) {
  try {
    const { id } = req.params;

    const book = await books.findByPk(id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    await book.destroy();

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete book" });
  }
};
