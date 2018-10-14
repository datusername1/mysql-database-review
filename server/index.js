const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const connection = require('../database/');
const router = require("./router");

const server = express();

const port = 3306;

server.use(cors());
server.use(morgan("dev"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use("/", router);

server.listen(port, () => console.log(`connected to port ${port}`));
