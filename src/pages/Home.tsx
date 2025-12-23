import Popülerürünler from "@/components/ui/common/Popülerürünler";
import ProductList from "@/components/ui/common/ProductList";
import { CarouselPlugin } from "@/components/ui/common/Slider";
function Home() {
  return (
    <>
    <div id="home"></div>
      <CarouselPlugin />
      <h2></h2>
      <Popülerürünler />

      {/* Kadın Banner */}
      <div id="kadin"className="max-w-7xl mx-auto mt-30">
        <img
          src="/images/Kadinsaatleri.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="mt-4">
        <ProductList category="kadin" />
      </div>

      <div id="erkek" className="max-w-7xl mx-auto mt-30">
        <img
          src="/images/erkeksaatleri.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>
      <ProductList category="erkek" />

      <div id="cocuk" className="max-w-7xl mx-auto mt-30">
        <img
          src="/images/cocuksaatleri.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>
      <ProductList category="cocuk" />

      <div id="giyilebilirteknoloji" className="max-w-7xl mx-auto mt-30">
        <img
          src="/images/giyilebilirteknoloji.png"
          alt="kadin"
          className="w-full h-auto object-cover"
        />
      </div>
      <ProductList category="giyilebilir-teknoloji" />
    </>
  );
}

export default Home;
