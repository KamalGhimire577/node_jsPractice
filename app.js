
const express = require("express");


const app = express();
app.use(express.json());


app.use("",require("./routes/bookRoutes"))
const port = 5000;
app.listen(port, () => {
  console.log("Server started successfully at port " + port);
});
