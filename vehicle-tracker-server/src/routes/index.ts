import { Router } from "express";
import VehicleRoutes from "./VehicleRoutes";

const apiRouter = Router();

const vehicleRouter = Router();
vehicleRouter.get("/vehicles", VehicleRoutes.getAll);
vehicleRouter.get("/vehicles/:id", VehicleRoutes.getById);

apiRouter.use(vehicleRouter);

export default apiRouter;
