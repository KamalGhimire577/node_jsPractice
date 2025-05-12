
const express = require("express");
const { books } = require("./database/connection");

const app = express();
app.use(express.json());

app.get("/book", async function (req, res) {
  try {
    const allBooks = await books.findAll();

    res.status(200).json({
      message: "Books fetched successfully",
      data: allBooks,
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
});

app.post("/book", async function (req, res) {
  try {
    const { bookName, bookPrice, bookAuthor } = req.body;

    // Optional validation
    if (!bookName || !bookPrice || !bookAuthor) {
      return res.status(400).json({ error: "All fields are required" });
    }

    await books.create({
      bookName,
      bookPrice,
      bookAuthor,
    });

    res.status(201).json({
      message: "Book created successfully",
    });
  } catch (error) {
    console.error("Error creating book:", error); // Logs full Sequelize error
    res.status(500).json({ error: "Failed to create book" });
  }
});


const port = 5000;
app.listen(port, () => {
  console.log("Server started successfully at port " + port);
});
