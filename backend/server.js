// Allows .env
require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
// Recieving reqs on cross-origins
const cors = require("cors");

