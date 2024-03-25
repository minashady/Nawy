const mongoose = require("mongoose");
const { Schema } = mongoose;
var ApartmentSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, required: true }, 
  compound: { type: Boolean, required: true },
  developer: { type: String, required: true },
});
var ApartmentModel = mongoose.model("Apartment", ApartmentSchema);
module.exports = ApartmentModel;
