const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    maxlength: 250,
    minlength: 2
  },
  description: {
    type: Schema.Types.String,
    maxlength: 250
  },
  url: {
    type: Schema.Types.String,
    maxlength: 250
  },
  order: {
    type: Schema.Types.Number,
    required: true
  },
  children: [{ type: Schema.Types.ObjectId, ref: "menus" }],
  _module: {
    type: Schema.Types.ObjectId,
    ref: "modules"
  },
  _parent: {
    type: Schema.Types.ObjectId,
    ref: "menus"
  }
});

module.exports = Menu = mongoose.model("menus", MenuSchema);
