import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);

  const vehiclesData = [
    {
      name: "Fleet Truck 001",
      status: "ACTIVE",
      fuel_level: 85.5,
      odometer: 125430.2,
      latitude: -7.8,
      longitude: 110.36,
      speed: 45.2,
    },
    {
      name: "Delivery Van 002",
      status: "ACTIVE",
      fuel_level: 62.8,
      odometer: 89765.4,
      latitude: -7.79,
      longitude: 110.35,
      speed: 0,
    },
    {
      name: "Service Vehicle 003",
      status: "INACTIVE",
      fuel_level: 23.1,
      odometer: 156789.1,
      latitude: -7.81,
      longitude: 110.37,
      speed: 0,
    },
  ];

  for (const v of vehiclesData) {
    const vehicle = await prisma.vehicle.create({
      data: v,
    });
    console.log(`Created vehicle with id: ${vehicle.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
