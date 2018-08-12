const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    maxlength: 50,
    minlength: 2
  },
  description: {
    type: Schema.Types.String,
    maxlength: 250
  },
  modules: [{ type: Schema.Types.ObjectId, ref: "modules" }]
});

module.exports = Product = mongoose.model("products", ProductSchema);
