import products from "@/Data/products.json";
import ProductCard from "../common/ProductCard";
interface ProductType {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  category: string;
}

export default function PopularProducts() {
  // Her kategoriden ilk ürünü alıyoruz
  const populerUrunler: ProductType[] = [
    products.find((p) => p.category === "kadin") as ProductType,
    products.find((p) => p.category === "erkek") as ProductType,
    products.find((p) => p.category === "cocuk") as ProductType,
    products.find((p) => p.category === "giyilebilir-teknoloji") as ProductType,
  ].filter(Boolean);

  return (
    <>
  
    <div className="max-w-7xl mx-26 items-center mt-20">
    <h2 className="pr-2">Popüler ürünler</h2>

      <div className=" grid grid-cols-2 md:grid-cols-4 gap-21">
          
        {populerUrunler.map((urun: ProductType) => (
          <ProductCard key={urun.id} product={urun} />
        ))}
      </div>
    </div>
    </>
  );
}