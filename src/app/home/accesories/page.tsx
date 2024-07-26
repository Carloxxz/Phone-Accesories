import { CardItem } from "@/components/CardItem";
import { HeadContent } from "@/components/Head";
import { products } from "../../../../data/products";

export default function AccesoriesPage() {
  return (
    <div>
      <section className="bg-red-400">
        <HeadContent
          title="Accesories"
          description="Prototipo de página web para accesorios de teléfonos"
          image={`esto es una imagen de prueba`}
        />
      </section>

      <section className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <CardItem key={index} product={product} />
        ))}
      </section>
    </div>
  );
}
