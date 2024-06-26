const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejsMate = require("ejs-mate");
const ravindraRouter = require("./routes/ravindra.js");
const app = express();

const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.use("/", ravindraRouter);
const dbUrl = "mongodb://localhost:27017/Portfolio";

main()
  .then(console.log("db connect"))
  .catch((err) => console.log(err));

async function main() {
 await mongoose.connect(dbUrl);
}

app.listen(port, () => {
  console.log(`server is listing at ${port}`);
});
