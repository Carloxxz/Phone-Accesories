'use client';

import React from 'react';
import { CardItem } from '@/components/CardItem';
import { HeadContent } from '@/components/Head';
import useFilteredProducts from '@/hooks/useFilteredProducts';

export default function HomePage() {
  const initialFilters = {
    sortByPriceAsc: false,
    sortByPriceDesc: false,
    inStock: false,
    iPhones: false,
    android: false,
  };

  const { products, filters, toggleFilter } = useFilteredProducts(initialFilters);

  return (
    <div>
      <section className="bg-red-400">
        <HeadContent
          title="Cases"
          description="Prototipo de página web para fundas de teléfonos"
          image="esto es una imagen de prueba"
        />
      </section>

      <select
        className="block w-full p-2 text-black bg-white border border-gray-300 rounded"
        onChange={(e) => toggleFilter(e.target.value as keyof typeof filters)}
      >
        <option value="sortByPriceAsc">Menor Precio</option>
        <option value="sortByPriceDesc">Mayor Precio</option>
        <option value="inStock">En Stock</option>
        <option value="iPhones">iPhones</option>
        <option value="android">Android</option>
      </select>

      <section className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.length > 0 ? (
          products.map(product => (
            <CardItem key={product.id} product={product} />
          ))
        ) : (
          <h1>No hay productos</h1>
        )}
      </section>
    </div>
  );
}
