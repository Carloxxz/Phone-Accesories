'use client';

import { useState, useEffect } from 'react';
import { getProducts } from '@/actions/prisma-actions';

interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

type FilterOptions = {
    sortByPriceAsc: boolean;
    sortByPriceDesc: boolean;
    inStock: boolean;
    iPhones: boolean;
    android: boolean;
};

const useFilteredProducts = (initialFilters: FilterOptions) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState(initialFilters);

    useEffect(() => {
        async function fetchAndFilterProducts() {
            const allProducts = await getProducts();

            let filteredProducts = [...allProducts];


            const filterFunctions = [
                filters.sortByPriceAsc ? (arr: Product[]) => [...arr].sort((a, b) => a.price - b.price) : null,
                filters.sortByPriceDesc ? (arr: Product[]) => [...arr].sort((a, b) => b.price - a.price) : null,
                filters.inStock ? (arr: Product[]) => arr.filter(product => product.stock > 0) : null,
                filters.iPhones ? (arr: Product[]) => arr.filter(product => product.name.toLowerCase().includes('iphone')) : null,
                filters.android ? (arr: Product[]) => arr.filter(product => product.name.toLowerCase().includes('android')) : null,
            ];

            for (const filterFunction of filterFunctions) {
                if (filterFunction) {
                    filteredProducts = filterFunction(filteredProducts);
                }
            }

            setProducts(filteredProducts);
        }

        fetchAndFilterProducts();
    }, [filters]);

    const toggleFilter = (filterName: keyof FilterOptions) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: !prevFilters[filterName],
        }));
    };

    return { products, filters, toggleFilter };
};

export default useFilteredProducts;
