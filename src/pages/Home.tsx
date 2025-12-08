import Popülerürünler from "@/components/ui/common/Popülerürünler";
import ProductList from "@/components/ui/common/ProductList";
import { CarouselPlugin } from "@/components/ui/common/Slider";
function Home() {
  return (
    <>
      <CarouselPlugin />
      <h2></h2>
      <Popülerürünler />

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

      <div className="max-w-7xl mx-auto mt-30">
        <img
          src="/src/assets/images/erkeksaatleri.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>
      <ProductList category="erkek" />

      <div className="max-w-7xl mx-auto mt-30">
        <img
          src="/src/assets/images/cocuksaatleri.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>
      <ProductList category="cocuk" />

      <div className="max-w-7xl mx-auto mt-30">
        <img
          src="/src/assets/images/giyilebilirteknoloji.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>
      <ProductList category="giyilebilir-teknoloji" />
    </>
  );
}

export default Home;
