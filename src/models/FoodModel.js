import FoodSchema from "./FoodSchema.js";

export const createNewFood = (foodObj) => {
  return FoodSchema(foodObj).save();
};
