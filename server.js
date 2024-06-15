const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const MongoClient = require("mongodb");
const mainRoute = require("./routes/index");
const port = 5000;

dotenv.config();

const URI = process.env.MONGO_URI;

const client = new MongoClient(URI);
client.connect();

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Server working on Port:${port}`);
});
