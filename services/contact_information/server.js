const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const configurationProperties = require("../../config/configuration-properties");

const countries = require("../../routes/api/contact_information/countries");

mongoose
  .connect(
    configurationProperties.connectionString,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Database connection established ..."))
  .catch(err => console.log(`Database connection error : ${err.message}`));

app.use("/api/contact-information", countries);

const port = process.env.PORT || configurationProperties.contactInformationPort;

app.listen(port, () => console.log(`Server is running on  port ${port}`));
