import express from 'express';
import * as restaurantController from '../controllers/restaurantController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *  name: Restaurantes
 *  description: Operaciones relacionadas con los restaurantes 
**/ 


/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     summary: Obtener todos los restaurantes
 *     tags: [Restaurantes]
 *     responses:
 *       200:
 *         description: Lista de restaurantes
 *       500:
 *         description: Error en el servidor
 */
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
