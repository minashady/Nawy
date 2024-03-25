import { Double } from "mongodb";
import mongoose, { Document, Schema } from "mongoose";


interface Apartment extends Document {
  name: string;
  description: string;
  image: string;
  location: string;
  price: Double;
  compound: boolean;
  developer: string;
}

const ApartmentSchema = new Schema<Apartment>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Double, required: true },
  compound: { type: Boolean, required: true },
  developer: { type: String, required: true },
});


const ApartmentModel = mongoose.model<Apartment>("Apartment", ApartmentSchema);

export default ApartmentModel;
