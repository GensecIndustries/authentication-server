const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    maxlength: 250,
    minlength: 2
  },
  description: {
    type: Schema.Types.String,
    required: true,
    maxlength: 250,
    minlength: 20
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true
  },
  menus: [{ type: Schema.Types.ObjectId, ref: "menus" }],
  _product: {
    type: Schema.Types.ObjectId,
    ref: "products"
  }
});

module.exports = Module = mongoose.model("modules", ModuleSchema);
