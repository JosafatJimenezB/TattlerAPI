import express from "express";
import * as filterController from '../controllers/filterController'

const router = express.Router();

router.get("/cuisine", filterController.filterByCuisine);
router.get('/borough', filterController.filterByBorough);
router.get('/score', filterController.filterByScore);
router.get('/location', filterController.filterByLocation)

export default router;


