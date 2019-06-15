const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("DB connected"))
  .catch(error => console.log(error));

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
