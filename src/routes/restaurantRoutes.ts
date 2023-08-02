import express from 'express';
import * as restaurantController from '../controllers/restaurantController';

const router = express.Router();

// Obtener todos los restaurantes
router.get('/restaurants', restaurantController.getAllRestaurants);

// Obtener un restaurante por ID
router.get('/restaurants/:id', restaurantController.getRestaurantById);

// Agregar un restaurante
router.post('/restaurants', restaurantController.addRestaurant);

// Actualizar un restaurante por ID
router.put('/restaurants/:id', restaurantController.updateRestaurant);

// Eliminar un restaurante por ID
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

export default router;
