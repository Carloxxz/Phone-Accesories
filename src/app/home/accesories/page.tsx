'use client';

import { CardItem } from "@/components/cardItem";
import { HeadContent } from "@/components/head";
import { FilterBar } from "@/components/filtros";
import useFilteredProducts from "@/hooks/useFilteredProducts";

export default function AccesoriesPage() {

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
      <section className=" shadow-md rounded-md">
        <HeadContent
          title="Accesories"
          description="Prototipo de página web para fundas de teléfonos"
          image="esto es una imagen de prueba"
        />
      </section>

      <FilterBar toggleFilter={toggleFilter} filters={filters} />

      <section className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {
          products.length > 0
            ? products.map(product => (
              <CardItem key={product.id} product={product} />
            ))
            : (<h1>No hay productos</h1>)
        }
      </section>
    </div>
  );
}
