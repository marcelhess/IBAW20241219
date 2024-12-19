import { v4 } from "uuid";
import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/product", (req, res) => {
  res.send("Send products here...");
});

app.post("/product", (req, res) => {
  res.send("Create product here...test");
});

app.put("/product/:id", (req, res) => {
  res.send("Update product here...");
});

app.delete("/product/:id", (req, res) => {
  res.send("Delete product here...");
});

app.listen(PORT, () => {
  console.log(`Unser Backend ist gestartet auf Port ${PORT}`);
});
