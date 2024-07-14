import { CardItem } from "@/components/CardItem";
import { HeadContent } from "@/components/Head";

const products = [
  { name: "Apple AirPods", price: 95.00, stock: 10 },
  { name: "Samsung Galaxy Buds", price: 80.00, stock: 15 },
];

export default function HeadphonesPage() {
  return (
    <div>
      <section className="bg-red-400">
        <HeadContent
          title="Headphones"
          description="Prototipo de página web para auriculares"
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
