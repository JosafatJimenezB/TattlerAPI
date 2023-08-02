import { Request, Response } from 'express';
import RestaurantModel, { Restaurant } from '../models/restaurantModel'

// Obtener todos los restaurantes
export const getAllRestaurants = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantModel.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los restaurantes' });
  }
};

// Obtener un restaurante por ID
export const getRestaurantById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const restaurant = await RestaurantModel.findById(id);
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: 'Restaurante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el restaurante' });
  }
};

// Agregar un restaurante
export const addRestaurant = async (req: Request, res: Response) => {
  const newRestaurant: Restaurant = req.body;
  try {
    const restaurant = new RestaurantModel(newRestaurant);
    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar el restaurante' });
  }
};

// Actualizar un restaurante por ID
export const updateRestaurant = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedRestaurant: Restaurant = req.body;
  try {
    const restaurant = await RestaurantModel.findByIdAndUpdate(id, updatedRestaurant, { new: true });
    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ error: 'Restaurante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el restaurante' });
  }
};

// Eliminar un restaurante por ID
export const deleteRestaurant = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const restaurant = await RestaurantModel.findByIdAndDelete(id);
    if (restaurant) {
      res.json({ message: 'Restaurante eliminado' });
    } else {
      res.status(404).json({ error: 'Restaurante no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el restaurante' });
  }
};
