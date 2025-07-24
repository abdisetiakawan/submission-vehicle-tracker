import prisma from '@src/lib/prisma';
import { RouteError } from '@src/common/util/route-errors';
import HttpStatusCodes from '@src/common/constants/HttpStatusCodes';

export const VEHICLE_NOT_FOUND_ERR = 'Vehicle not found';

/**
 * Get all vehicles.
 */
async function getAll() {
  return prisma.vehicle.findMany({
    orderBy: {
      id: 'asc',
    },
  });
}

/**
 * Get one vehicle by id.
 */
async function getById(id: number) {
  const vehicle = await prisma.vehicle.findUnique({
    where: { id },
  });

  if (!vehicle) {
    throw new RouteError(HttpStatusCodes.NOT_FOUND, VEHICLE_NOT_FOUND_ERR);
  }

  return vehicle;
}

export default {
  getAll,
  getById,
} as const;