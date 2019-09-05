const express = require("express");
const app = express();
const cors = require("cors");
const sampleRouter = require("./src/routes/sample.route");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/sampleRoute", sampleRouter);
module.exports = app;
