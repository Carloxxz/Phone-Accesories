// src/app/home/cases/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { CardItem } from '@/components/CardItem';
import { HeadContent } from '@/components/Head';
import { getProducts } from '@/actions/prisma-actions';

// Define el tipo de producto
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export default function HomePage() {
  // Especifica el tipo de estado
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const result = await getProducts();
      setProducts(result);
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <section className="bg-red-400">
        <HeadContent
          title="Cases"
          description="Prototipo de página web para fundas de teléfonos"
          image="esto es una imagen de prueba"
        />
      </section>

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
