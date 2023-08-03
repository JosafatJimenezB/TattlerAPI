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
const restaurantController = __importStar(require("../controllers/restaurantController"));
const router = express_1.default.Router();
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
exports.default = router;
//# sourceMappingURL=restaurantRoutes.js.map