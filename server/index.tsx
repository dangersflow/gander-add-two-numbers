// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// api call to add two numbers
app.get("/api/add/:numberOne/:numberTwo", (req, res) => {
  const { numberOne, numberTwo } = req.params;
  const result = parseInt(numberOne) + parseInt(numberTwo);
  res.json({ result });
});
