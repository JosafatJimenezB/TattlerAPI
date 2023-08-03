"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commentController = __importStar(require("../controllers/commentController"));
const router = express_1.default.Router();
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
exports.default = router;
//# sourceMappingURL=commentRoutes.js.map