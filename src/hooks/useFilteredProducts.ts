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
            let result = await getProducts();

            const filterFunctions: Record<keyof FilterOptions, () => void> = {
                sortByPriceAsc: () => result.sort((a, b) => a.price - b.price),
                sortByPriceDesc: () => result.sort((a, b) => b.price - a.price),
                inStock: () => result = result.filter(product => product.stock > 0),
                iPhones: () => result = result.filter(product => product.name.toLowerCase().includes('iphone')),
                android: () => result = result.filter(product => product.name.toLowerCase().includes('android')),
            };

            Object.entries(filters).forEach(([key, value]) => {
                if (value) filterFunctions[key as keyof FilterOptions]?.();
            });

            setProducts(result);
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
