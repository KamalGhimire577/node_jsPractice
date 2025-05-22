const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes"); // ✅ No `.default`

const app = express();

// Middleware: Allow frontend to access the backend (CORS policy)
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware: Parse incoming JSON requests
app.use(express.json());

// Routes
app.use("/api/book", bookRoutes); // ✅ Pass router directly

// Start server
const port = 5000;
app.listen(port, () => {
  console.log(`✅ Server started successfully at http://localhost:${port}`);
});
