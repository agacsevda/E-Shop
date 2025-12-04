import ProductCard from "@/components/ui/common/ProductCard";
import ProductList from "@/components/ui/common/ProductList";
import { CarouselPlugin } from "@/components/ui/common/Slider";
function Home() {
  return <>
  <CarouselPlugin />
     {/* Kadın Banner */}
      <div className="max-w-7xl mx-auto mt-30">
        <img
          src="/src/assets/images/Kadinsaatleri.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>
      
       <div className="mt-4">
        <ProductList category="kadin" />
      </div>

      <h2>ERKEK</h2>
      <ProductList category="erkek" />

      <h2>ÇOCUK</h2>
      <ProductList category="cocuk" />

      <h2>GİYİLEBİLİR TEKNOLOJİ</h2>
      <ProductList category="giyilebilir-teknoloji" />
    </>

}

export default Home;
