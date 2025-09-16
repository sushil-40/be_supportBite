import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  foodItemName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("food", FoodSchema);
