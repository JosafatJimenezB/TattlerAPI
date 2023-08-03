"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRestaurant = exports.updateRestaurant = exports.addRestaurant = exports.getRestaurantById = exports.getAllRestaurants = void 0;
const restaurantModel_1 = __importDefault(require("../models/restaurantModel"));
// Obtener todos los restaurantes
const getAllRestaurants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield restaurantModel_1.default.find();
        res.json(restaurants);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener los restaurantes' });
    }
});
exports.getAllRestaurants = getAllRestaurants;
// Obtener un restaurante por ID
const getRestaurantById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const restaurant = yield restaurantModel_1.default.findById(id);
        if (restaurant) {
            res.json(restaurant);
        }
        else {
            res.status(404).json({ error: 'Restaurante no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al obtener el restaurante' });
    }
});
exports.getRestaurantById = getRestaurantById;
// Agregar un restaurante
const addRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRestaurant = new restaurantModel_1.default(req.body);
        const savedRestaurant = yield newRestaurant.save();
        res.status(201).json(savedRestaurant);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al agregar el restaurante' });
    }
});
exports.addRestaurant = addRestaurant;
// Actualizar un restaurante por ID
const updateRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const updatedRestaurant = req.body;
    try {
        const restaurant = yield restaurantModel_1.default.findByIdAndUpdate(id, updatedRestaurant, { new: true });
        if (restaurant) {
            res.json(restaurant);
        }
        else {
            res.status(404).json({ error: 'Restaurante no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al actualizar el restaurante' });
    }
});
exports.updateRestaurant = updateRestaurant;
// Eliminar un restaurante por ID
const deleteRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const restaurant = yield restaurantModel_1.default.findByIdAndDelete(id);
        if (restaurant) {
            res.json({ message: 'Restaurante eliminado' });
        }
        else {
            res.status(404).json({ error: 'Restaurante no encontrado' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Error al eliminar el restaurante' });
    }
});
exports.deleteRestaurant = deleteRestaurant;
//# sourceMappingURL=restaurantController.js.map