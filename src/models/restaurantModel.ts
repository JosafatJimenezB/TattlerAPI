import mongoose, { Document } from "mongoose";

interface Grade {
  date: Date;
  score: number;
}

interface Comment {
  date: Date;
  comment: string;
}

interface Address {
  building: string;
  coord: number[];
  street: string;
  zipcode: string;
}

export interface Restaurant extends Document {
  name: string;
  cuisine: string;
  borough: string;
  address: Address;
  grades: Grade[];
  comments: Comment[];
  restaurant_id: string;
}

const restaurantSchema = new mongoose.Schema<Restaurant>({
  name: String,
  cuisine: String,
  borough: String,
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String,
  },
  grades: [
    {
      date: Date,
      score: Number,
    },
  ],
  comments: [
    {
      date: Date,
      comment: String,
    },
  ],
  restaurant_id: String,
});

export default mongoose.model<Restaurant>("Restaurant", restaurantSchema);
