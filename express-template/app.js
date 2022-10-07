const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

var expressRouter = require("./routes/express");

let app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use('/', expressRouter);

app.listen(3000, () => {
  console.log("Your server is running");
});
