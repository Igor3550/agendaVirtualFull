import prisma from "../database/prisma-connection";

async function insertService(name: string, duration: number, price: number) {
  return await prisma.service.create({
    data: {
      name,
      duration,
      price
    }
  })
};

async function listServices() {
  return await prisma.service.findMany({
    where:{
      active: true
    }
  })
};

async function findById(id: number) {
  return await prisma.service.findFirst({
    where: {
      id,
      active: true
    }
  })
};

async function updateService(id: number, name: string, duration: number, price: number) {
  return prisma.service.update({
    where: {
      id
    },
    data: {
      name,
      duration,
      price
    }
  });
};

async function deleteService(id: number) {
  return await prisma.service.update({
    where: {
      id
    },
    data:{
      active: false
    }
  })
};

const serviceRepository = {
  insertService,
  listServices,
  findById,
  updateService,
  deleteService
}

export default serviceRepository;
