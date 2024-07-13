// src/app/home/cases/page.tsx

"use client";

import { CardItem } from "@/components/CardItem";
import { HeadContent } from "@/components/Head";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section className="bg-red-400">
        <HeadContent
          title="Cases"
          description="Prototipo de página web para fundas de teléfonos"
          image={`esto es una imagen de prueba`}
        />
      </section>

      <section className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <CardItem key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
