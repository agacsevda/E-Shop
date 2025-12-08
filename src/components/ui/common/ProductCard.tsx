import React from "react";
import { Heart } from "lucide-react";

interface ProductType {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="max-w-7xl mx-auto items-center justify-between py-4 px-4 m-10">
    <div className="relative w-[250px] h-[350px] bg-[#F8F8F8] p-2">

      {/* ❤️ Beğen Butonu */}
      <button className="absolute top-3 right-3 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition">
        <Heart size={20} className="text-red-500" />
      </button>

      {/* Card Shape + Resim */}
      <svg
        width="235"
        height="330"
        viewBox="0 0 235 330"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
      >
        <defs>
          <pattern
            id={`image-${product.id}`}
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href={product.image}  // ← JSON’dan gelen resim burada
              width="235"
              height="330"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>

        <path
          d="M151.395 0C162.447 0 169.983 13.0103 169.983 24.0625C169.983 47.7935 187.519 67.0312 209.15 67.0312C219.899 67.0312 235 74.2718 235 85.0202V314C235 322.837 227.837 330 219 330H16C7.16345 330 0 322.837 0 314V16C0 7.16345 7.16344 0 16 0H151.395Z"
          fill={`url(#image-${product.id})`} // ← benzersiz pattern
        />
      </svg>

      {/* Ürün Bilgileri */}
      <div className="text-center mt-3 ">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.model}</p>
        <p className="font-semibold mt-1">{product.price} TL</p>
        <button className="w-full mt-3 bg-[#FF6605] text-white py-2 rounded-md hover:bg-gray-800 transition">
        Sepete Ekle
      </button>
      </div>
    </div>
     
    </div>
    
  );
}
