const express = require("express");
const router = express.Router();
const isEmpty = require("../../../utils/validation/is-empty");
const Country = require("../../../db/models/country");

router.get("/test", (req, res) => res.json({ msg: "Countries Works" }));

router.get("/country", (req, res) => {
  Country.find()
    .collation({ locale: "tr" })
    .sort({ name: "asc" })
    .then(countries => res.json(countries))
    .catch(err => res.status(404).json({ msg: "No countries found." }));
});

router.get("/country/:countryId", (req, res) => {
  let countryId = req.params.countryId;

  Country.findOne({ _id: countryId })
    .collation({ locale: "tr" })
    .sort({ name: "asc" })
    .then(countries => res.json(countries))
    .catch(err => res.status(404).json({ msg: "No country found." }));
});

module.exports = router;
