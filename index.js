const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const banner = require("./data/banner.json");
const services = require("./data/services.json");

app.use(cors());
app.use(express.json());

app.get("/banner", (req, res) => {
  res.send(banner);
});

app.get("/services", (req, res) => {
  res.send(services);
});










app.get("/", (req, res) => {
  res.send("car doctor server running");
});

app.listen(port, () => {
  console.log("car doctor server is running");
});
