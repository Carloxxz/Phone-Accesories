import { PrismaClient } from "@prisma/client";
import { products } from "../data/products";

const prisma = new PrismaClient() // Métodos para la interacción

// Función para guardar los datos
async function main() {
    try {
        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })