const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
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
  neighborhoods: [{ type: Schema.Types.Number, ref: "neighborhoods" }],
  _county: {
    type: Schema.Types.Number,
    ref: "counties"
  }
});

module.exports = Area = mongoose.model("areas", AreaSchema);
