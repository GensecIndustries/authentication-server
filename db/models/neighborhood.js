const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NeighborhoodSchema = new Schema({
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
  zipCode: {
    type: Schema.Types.String,
    required: true
  },
  _area: {
    type: Schema.Types.Number,
    ref: "areas"
  }
});

module.exports = Neighborhood = mongoose.model("neighborhoods", NeighborhoodSchema);
