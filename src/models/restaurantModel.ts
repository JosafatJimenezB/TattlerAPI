import mongoose, { Document } from 'mongoose';

interface Grade {
  date: Date;
  score: number;
}

interface Comment {
  date: Date;
  comment: string;
}

export interface Restaurant extends Document {
  _id: string;
  address: {
    building: string;
    coord: [number, number];
    street: string;
    zipcode: string;
  };
  borough: string;
  cuisine: string;
  grades: Grade[];
  comments: Comment[];
  name: string;
  restaurant_id: string;
}

const restaurantSchema = new mongoose.Schema<Restaurant>({
  _id: String,
  address: {
    building: String,
    coord: [Number],
    street: String,
    zipcode: String,
  },
  borough: String,
  cuisine: String,
  grades: [{ date: Date, score: Number }],
  comments: [{ date: Date, comment: String }],
  name: String,
  restaurant_id: String,
});

const RestaurantModel = mongoose.model<Restaurant>('Restaurant', restaurantSchema);

export default RestaurantModel;
