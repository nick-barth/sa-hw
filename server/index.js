const express = require("express");
const app = express();
const port = 1337;

const clients = require("./clients.json");

app.get("/client", (req, res) => res.json(clients));

app.get("/client/:id", (req, res) => {
  req.query.id;
});

app.listen(port, () => console.log(`App chilling on ${port}!`));
