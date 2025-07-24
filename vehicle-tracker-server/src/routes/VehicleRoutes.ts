import HttpStatusCodes from "@src/common/constants/HttpStatusCodes";
import VehicleService from "@src/services/VehicleService";
import { IReq, IRes } from "./common/types";

/**
 * Get all vehicles.
 */
async function getAll(_: IReq, res: IRes) {
  const vehicles = await VehicleService.getAll();
  return res.status(HttpStatusCodes.OK).json({ vehicles });
}

/**
 * Get one vehicle by ID.
 */
async function getById(req: IReq, res: IRes) {
  const id = parseInt(req.params.id as string, 10);
  const vehicle = await VehicleService.getById(id);
  return res.status(HttpStatusCodes.OK).json({ vehicle });
}

export default {
  getAll,
  getById,
} as const;
