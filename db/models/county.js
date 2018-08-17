const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountySchema = new Schema({
  _id: {
    type: Schema.Types.Number,
    required: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  areas: [{ type: Schema.Types.Number, ref: "areas" }],
  _city: {
    type: Schema.Types.Number,
    ref: "cities"
  }
});

module.exports = County = mongoose.model("counties", CountySchema);
