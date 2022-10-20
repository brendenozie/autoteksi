import mongoose from "mongoose";
const TripSchema = new mongoose.Schema({
  pickupTime: {
    type: String,
    required: true,
  },
  pickupDate: {
    type: String,
    required: true,
  },
  pickupLocation: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  priceKm: {
    type: String,
    required: true,
  },
  priceTotal: {
    type: [String],
  },
  clientId: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientPhone: {
    type: Number,
    required: true,
  },
  vehicleId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: Number,
    required: true,
  },
  userPhone: {
    type: Boolean,
    default: false,
  },
  tripStatus: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Trips", TripSchema)