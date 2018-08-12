const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
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
  plateNumber: {
    type: Schema.Types.String,
    required: true
  },
  phoneCode: {
    type: Schema.Types.String,
    required: true
  },
  counties: [{ type: Schema.Types.Number, ref: "counties" }],
  _country: {
    type: Schema.Types.Number,
    ref: "countries"
  }
});

module.exports = City = mongoose.model("cities", CitySchema);
