import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "Home Page", success: true });
});

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}...`);
});
