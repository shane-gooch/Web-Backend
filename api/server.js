const express = require("express"),
  cors = require("cors"),
  helment = require("helmet");

const server = express();

const authRoute = require("../auth/auth-route.js");

//gobal middleware
server.use(helment());
server.use(cors());
server.use(express.json());

//Test Route
server.get("/", (req, res) => {
  res.status(200).json({ message: "api connected" });
});

//Routes
server.use("/api/auth", authRoute);

module.exports = server;