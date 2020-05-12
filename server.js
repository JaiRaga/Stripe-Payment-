if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

console.log(STRIPE_SECRET_KEY);

const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(8888, () => console.log("App is up!"));
