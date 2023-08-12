const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a batch name"],
  },
  price: {
    type:String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String, 

  }
});

module.exports = mongoose.model("Product", productSchema);
