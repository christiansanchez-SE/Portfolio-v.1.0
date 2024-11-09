// Allows .env
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
// Recieving reqs on cross-origins
const cors = require("cors");

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Express doesn't naturally convert our data to JSON
app.use(express.json());
// Middleware [Lets you use urlencoded in postman]
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

connectToDb();

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// Logging Middleware
app.use((req, res, next) => {
  const time = new Date();
  console.log(`------- ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
  if (Object.keys(req.body).length > 0) {
    console.log("Containing the data:");
    console.log(`${JSON.stringify(req.body)}`);
  }
  next();
});