const EARTH_RADIUS_KM = 6371; // Radio de la Tierra en kilómetros

/**
 * Calcula la distancia entre dos puntos geográficos en kilómetros.
 * @param lat1 Latitud del primer punto
 * @param lon1 Longitud del primer punto
 * @param lat2 Latitud del segundo punto
 * @param lon2 Longitud del segundo punto
 * @returns Distancia en kilómetros
 */
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS_KM * c;
};

/**
 * Convierte grados a radianes.
 * @param degrees Grados
 * @returns Radianes
 */
const toRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};
