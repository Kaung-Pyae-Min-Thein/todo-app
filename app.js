
const express = require("express");
const https = require("https");
const app = express();

app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

const lists = [];

app.get("/", (req, res) => {
  const day = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  const today = day.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: today, lists: lists });
});

app.post("/", (req, res) => {
  const task = req.body.task;

  lists.push(task);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});