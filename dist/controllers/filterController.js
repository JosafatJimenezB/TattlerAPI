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
exports.filterByLocation = exports.filterByScore = exports.filterByBorough = exports.filterByCuisine = void 0;
const restaurantModel_1 = __importDefault(require("../models/restaurantModel"));
const geoUtils_1 = require("../utils/geoUtils");
const filterByCuisine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cuisine } = req.query;
    try {
        const restaurants = yield restaurantModel_1.default.find({ cuisine });
        res.json(restaurants);
    }
    catch (error) {
        res.status(500).json({ error: "Error al filtrar por tipo de cocina" });
    }
});
exports.filterByCuisine = filterByCuisine;
const filterByBorough = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { borough } = req.query;
    try {
        const restaurants = yield restaurantModel_1.default.find({ borough });
        res.json(restaurants);
    }
    catch (error) {
        res.status(500).json({ error: "Error al filtrar por colonia" });
    }
});
exports.filterByBorough = filterByBorough;
const filterByScore = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { minScore, maxScore } = req.query;
    try {
        const restaurants = yield restaurantModel_1.default.find({
            "grades.score": {
                $gte: Number(minScore),
                $lte: Number(maxScore),
            },
        });
        res.json(restaurants);
    }
    catch (error) {
        res.status(500).json({ error: "Error al filtrar por puntuación" });
    }
});
exports.filterByScore = filterByScore;
const filterByLocation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const radius = req.query.radius;
    if (!lat || !lon || !radius) {
        return res.status(400).json({ error: "Faltan parametros de consulta" });
    }
    try {
        const restaurants = yield restaurantModel_1.default.find();
        const filteredRestaurants = restaurants.filter((restaurant) => (0, geoUtils_1.calculateDistance)(parseFloat(lat), parseFloat(lon), restaurant.address.coord[1], restaurant.address.coord[0]) <= parseFloat(radius));
        res.json(filteredRestaurants);
    }
    catch (error) {
        res.status(500).json({ error: "Error al filtrar por ubicación" });
    }
});
exports.filterByLocation = filterByLocation;
//# sourceMappingURL=filterController.js.map