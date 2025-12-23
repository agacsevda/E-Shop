import { Heart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface ProductType {
  id: number;
  name: string;
  model: string;
  price: number;
  images: string[];
  category: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  images: string[];
  quantity: number;
}

interface ProductCardProps {
  product: ProductType;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    const cart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        images: product.images,
        quantity: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    navigate("/sepetim");
  };

  return (
    <div className="max-w-7xl mx-auto py-4 px-4 m-10">
      <div className="relative w-[250px] h-[350px] bg-[#F8F8F8] p-2">

        {/* ❤️ Beğen */}
        <button className="absolute top-3 right-3 bg-white/70 p-2 rounded-full shadow-md">
          <Heart size={20} className="text-red-500" />
        </button>

        <Link to={`/product/${product.id}`}>
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
                  href={product.images[0]}
                  width="235"
                  height="330"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>

            <path
              d="M151.395 0C162.447 0 169.983 13.0103 169.983 24.0625C169.983 47.7935 187.519 67.0312 209.15 67.0312C219.899 67.0312 235 74.2718 235 85.0202V314C235 322.837 227.837 330 219 330H16C7.16345 330 0 322.837 0 314V16C0 7.16345 7.16344 0 16 0H151.395Z"
              fill={`url(#image-${product.id})`}
            />
          </svg>
        </Link>

        <div className="text-center mt-3">
          <h3 className="font-bold">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.model}</p>
          <p className="font-semibold mt-1">{product.price} TL</p>

          <button
            onClick={handleAddToCart}
            className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded-lg mt-5"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
