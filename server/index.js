const express = require("express");
const app = express();
const port = 1337;
const cors = require("cors");

app.use(cors());

const clients = require("./clients.json");

app.get("/client", (req, res) => res.json(clients));

app.listen(port, () =>
  console.log(`API chilling on http://localhost:${port}/`)
);
