import express from 'express';
import * as restaurantController from '../controllers/restaurantController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Restaurantes
 *   description: Operaciones relacionadas con los restaurantes
 */

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

/**
 * @swagger
 * /api/restaurants/{id}:
 *   get:
 *     summary: Obtener un restaurante por ID
 *     tags: [Restaurantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del restaurante
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del restaurante
 *       404:
 *         description: Restaurante no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.get('/restaurants/:id', restaurantController.getRestaurantById);

/**
 * @swagger
 * /api/restaurants:
 *   post:
 *     summary: Agregar un nuevo restaurante
 *     tags: [Restaurantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       201:
 *         description: Restaurante agregado con éxito
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error en el servidor
 */
router.post('/restaurants', restaurantController.addRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   put:
 *     summary: Actualizar un restaurante por ID
 *     tags: [Restaurantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del restaurante
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Restaurant'
 *     responses:
 *       200:
 *         description: Restaurante actualizado con éxito
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Restaurante no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/restaurants/:id', restaurantController.updateRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   delete:
 *     summary: Eliminar un restaurante por ID
 *     tags: [Restaurantes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del restaurante
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Restaurante eliminado con éxito
 *       404:
 *         description: Restaurante no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

export default router;
