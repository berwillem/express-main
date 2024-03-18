const express = require("express");
const app = express();
require("dotenv").config();
const userRoute = require("./routes/userRoutes");
const basepath = "/api/v1";

app.use(basepath, userRoute);
app.set("view engine", "pug");
app.set("views", "./views");
app.get(basepath + "/first_template", function (req, res) {
  res.render("home.pug");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("server is running on port ::", PORT);
