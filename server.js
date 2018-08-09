const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const configurationProperties = require("./config/configuration-properties");

mongoose
  .connect(
    configurationProperties.connectionString,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Database connection established ..."))
  .catch(err => console.log(`Database connection error : ${err.message}`));

const port = process.env.PORT || configurationProperties.port;

app.listen(port, () => console.log(`Server is running on  port ${port}`));
