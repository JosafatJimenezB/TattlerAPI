import express from 'express';
import * as commentController from '../controllers/commentController';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Comentarios
 *   description: Operaciones relacionadas con los comentarios de los restaurantes
 */

/**
 * @swagger
 * /api/restaurants/{id}/comments:
 *   post:
 *     summary: Agregar un nuevo comentario a un restaurante
 *     tags: [Comentarios]
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
 *             $ref: '#/components/schemas/Comment'
 *           example:
 *             date: "2023-08-03T12:00:00.000Z"
 *             comment: "¡Comentario nuevo!"
 *     responses:
 *       201:
 *         description: Comentario agregado con éxito
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Restaurante no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.post('/restaurants/:id/comments', commentController.addComment);

/**
 * @swagger
 * /api/restaurants/{id}/comments/{commentId}:
 *   put:
 *     summary: Actualizar un comentario por ID de restaurante y comentario
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del restaurante
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: ID del comentario
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *           example:
 *             date: "2023-08-03T12:00:00.000Z"
 *             comment: "Comentario actualizado"
 *     responses:
 *       200:
 *         description: Comentario actualizado con éxito
 *       400:
 *         description: Datos inválidos
 *       404:
 *         description: Restaurante o comentario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/restaurants/:id/comments/:commentId', commentController.updateComment);

/**
 * @swagger
 * /api/restaurants/{id}/comments/{commentId}:
 *   delete:
 *     summary: Eliminar un comentario por ID de restaurante y comentario
 *     tags: [Comentarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del restaurante
 *         schema:
 *           type: string
 *       - in: path
 *         name: commentId
 *         required: true
 *         description: ID del comentario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comentario eliminado con éxito
 *       404:
 *         description: Restaurante o comentario no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/restaurants/:id/comments/:commentId', commentController.deleteComment);

export default router;
