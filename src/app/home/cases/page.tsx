'use client';

import { useState, useEffect } from 'react';
import { CardItem } from '@/components/CardItem';
import { HeadContent } from '@/components/Head';
import { getProducts } from '@/actions/prisma-actions';

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    sortByPriceAsc: false,
    sortByPriceDesc: false,
    inStock: false,
    iPhones: false,
    android: false,
  });

  useEffect(() => {
    async function fetchProducts() {
      let result = await getProducts();
      
      // Aplicar los filtros a los productos
      if (filters.sortByPriceAsc) {
        result = result.sort((a, b) => a.price - b.price);
      }
      if (filters.sortByPriceDesc) {
        result = result.sort((a, b) => b.price - a.price);
      }
      if (filters.inStock) {
        result = result.filter(product => product.stock > 0);
      }
      if (filters.iPhones) {
        result = result.filter(product => product.name.toLowerCase().includes('iphone'));
      }
      if (filters.android) {
        result = result.filter(product => product.name.toLowerCase().includes('android'));
      }

      setProducts(result);
    }

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (filterName: string) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName]
    }));
  };

  return (
    <div>
      <section className="bg-red-400">
        <HeadContent
          title="Cases"
          description="Prototipo de página web para fundas de teléfonos"
          image="esto es una imagen de prueba"
        />
      </section>

      {/* Formulario de filtros */}
      <select
        className="block w-full p-2 text-black bg-white border border-gray-300 rounded"
        onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="sortByPriceAsc">Menor Precio</option>
        <option value="sortByPriceDesc">Mayor Precio</option>
        <option value="inStock">En Stock</option>
        <option value="iPhones">iPhones</option>
        <option value="android">Android</option>
      </select>


      {/* Productos */}
      <section className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <CardItem key={product.id} product={product} />
          ))
        ) : (
          <h1>No hay productos</h1>
        )}
      </section>
    </div>
  );
}
