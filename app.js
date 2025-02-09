const express = require("express");
const app = express();
const port = 3000;
const { logger, auth } = require("./middleware");

// Logger prints on every url.
app.use(logger);

app.get("/", (req, res) => {
  res.send("ברוכים הבאים לדף הבית!");
});

// Authenticates user only on /admin url path
app.use("/admin", auth);

app.get("/admin", (req, res) => {
  res.send("ברוכים הבאים לעמוד הניהול!");
});

app.get("/public", (req, res) => {
  res.send("זהו דף ציבורי.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
