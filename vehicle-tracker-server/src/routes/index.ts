import { Router } from "express";
import VehicleRoutes from "./VehicleRoutes";
import AuthRoutes from "./AuthRoutes";
import { authMiddleware } from "@src/middleware/authMiddleware";

const apiRouter = Router();

apiRouter.use("/auth", AuthRoutes);

const vehicleRouter = Router();
vehicleRouter.get("/vehicles", VehicleRoutes.getAll);
vehicleRouter.get("/vehicles/:id", VehicleRoutes.getById);

apiRouter.use(authMiddleware, vehicleRouter);

export default apiRouter;
