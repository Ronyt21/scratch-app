import express from "express";
const app = express();
const db = require("./config/dbconnection");
const ownerRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello CodeSandbox!");
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});
app.use("/owners", ownerRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
