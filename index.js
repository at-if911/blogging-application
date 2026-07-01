const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");

const UserRoutes = require("./routes/user");

const app = express();
const PORT = 9111;

mongoose
  .connect("mongodb://127.0.0.1:27017/bloggify")
  .then(() => console.log("MONGODB CONNECTED"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/user", UserRoutes);

app.listen(PORT, () => console.log("SERVER STARTED AT ", PORT));
