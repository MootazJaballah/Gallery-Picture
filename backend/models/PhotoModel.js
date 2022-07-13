const mongoose = require("mongoose");

const photoSchema = mongoose.Schema({
  name: { type: String, require: false },
  pic: { type: String, require: true },
});

module.exports = mongoose.model("photo", photoSchema);
