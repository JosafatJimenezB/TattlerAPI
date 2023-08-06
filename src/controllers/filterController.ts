import { Request, Response } from "express";
import restaurantModel from "../models/restaurantModel";
import { calculateDistance } from "../utils/geoUtils";
import { Restaurant } from "../models/restaurantModel";

export const filterByCuisine = async (req: Request, res: Response) => {
  const { cuisine } = req.query;

  try {
    const restaurants = await restaurantModel.find({ cuisine });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar por tipo de cocina" });
  }
};

export const filterByBorough = async (req: Request, res: Response) => {
  const { borough } = req.query;

  try {
    const restaurants = await restaurantModel.find({ borough });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar por colonia" });
  }
};

export const filterByScore = async (req: Request, res: Response) => {
  const { minScore, maxScore } = req.query;

  try {
    const restaurants = await restaurantModel.find({
      "grades.score": {
        $gte: Number(minScore),
        $lte: Number(maxScore),
      },
    });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar por puntuación" });
  }
};

export const filterByLocation = async (req: Request, res: Response) => {
  const lat = req.query.lat as string;
  const lon = req.query.lon as string;
  const radius = req.query.radius as string;

  if (!lat || !lon || !radius) {
    return res.status(400).json({ error: "Faltan parametros de consulta" });
  }

  try {
    const restaurants = await restaurantModel.find();
    const filteredRestaurants = restaurants.filter(
      (restaurant) =>
        calculateDistance(
          parseFloat(lat),
          parseFloat(lon),
          restaurant.address.coord[1],
          restaurant.address.coord[0]
        ) <= parseFloat(radius)
    );
    res.json(filteredRestaurants);
  } catch (error) {
    res.status(500).json({ error: "Error al filtrar por ubicación" });
  }
};
