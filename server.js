const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(8888, () => console.log("App is up!"));
