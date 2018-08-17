const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  _id: {
    type: Schema.Types.Number,
    index: true,
    unique: true,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  binaryCode: {
    type: Schema.Types.String,
    required: true
  },
  tripleCode: {
    type: Schema.Types.String,
    required: true
  },
  phoneCode: {
    type: Schema.Types.String,
    required: true
  },
  cities: [{ type: Schema.Types.Number, ref: "cities" }]
});

module.exports = Country = mongoose.model("countries", CountrySchema);
