// src/actions/prisma-actions.js
"use server"

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient();

export async function getProducts() {
    try {
        const products = await prisma.product.findMany();
        console.log(products)
        revalidatePath('/home/cases')
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}