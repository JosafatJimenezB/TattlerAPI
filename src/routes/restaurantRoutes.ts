import express from 'express';
import * as restaurantController from '../controllers/restaurantController';

const router = express.Router();

// Obtener todos los restaurantes
router.get('/', restaurantController.getAllRestaurants);

// Obtener un restaurante por ID
router.get('/:id', restaurantController.getRestaurantById);

// Agregar un restaurante
router.post('/', restaurantController.addRestaurant);

// Actualizar un restaurante por ID
router.put('/:id', restaurantController.updateRestaurant);

// Eliminar un restaurante por ID
router.delete('/:id', restaurantController.deleteRestaurant);

export default router;
