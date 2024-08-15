// src/actions/prisma-actions.ts
"use server"

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getProducts() {
    try {
        const products = await prisma.product.findMany();
        console.log(products);
        revalidatePath('/home/cases');
        return products;
    } catch (error) {
        console.error("Error al recuperar productos:", error);
        return [];
    }
}

export async function createProduct(data) {
    try {
        const product = await prisma.product.create({ data });
        revalidatePath('/home/cases');
        return product;
    } catch (error) {
        console.error("Error al crear producto:", error);
        throw error;
    }
}

export async function updateProduct(id: number, data: Partial<Product>) {
    try {
        const product = await prisma.product.update({
            where: { id },
            data
        });
        revalidatePath('/home/cases');
        return product;
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        throw error;
    }
}

export async function deleteProduct(id: number) {
    try {
        await prisma.product.delete({ where: { id } });
        revalidatePath('/home/cases');
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
}
