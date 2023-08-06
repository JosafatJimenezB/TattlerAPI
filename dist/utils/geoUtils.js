"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDistance = void 0;
const EARTH_RADIUS_KM = 6371; // Radio de la Tierra en kilómetros
/**
 * Calcula la distancia entre dos puntos geográficos en kilómetros.
 * @param lat1 Latitud del primer punto
 * @param lon1 Longitud del primer punto
 * @param lat2 Latitud del segundo punto
 * @param lon2 Longitud del segundo punto
 * @returns Distancia en kilómetros
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return EARTH_RADIUS_KM * c;
};
exports.calculateDistance = calculateDistance;
/**
 * Convierte grados a radianes.
 * @param degrees Grados
 * @returns Radianes
 */
const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
};
//# sourceMappingURL=geoUtils.js.map