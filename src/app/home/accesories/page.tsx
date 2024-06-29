import { CardItem } from "@/components/cardItem";
import { HeadContent } from "@/components/head";

export default function AccesoriesPage() {
  return (
    <div>
      <section className="bg-red-400">
      <HeadContent
                title="Accesories"
                description="Página de prueba para los accesorios"
                image={`esto es una imagen de prueba`}
                />
      </section>

      <section className="grid gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </section>
    </div>
  );
}