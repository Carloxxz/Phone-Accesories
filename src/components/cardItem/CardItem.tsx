import Image from "next/image";
import { InfoItem } from "./InfoItem";

interface Product {
  name: string;
  price: number;
  stock: number;
}

interface CardItemProps {
  product?: Product; 
}

export const CardItem = ({ product }: CardItemProps) => {
  if (!product) {
    return null; 
  }

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <Image
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
          className="h-full w-full object-cover"
          alt={product.name}
          fill
        />
      </div>
      <InfoItem product={product} />
    </div>
  );
};
