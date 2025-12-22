
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "@/Data/products.json";
import { Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ruler } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductType {
  id: number;
  name: string;
  price: number;
  images: string[];
  model?: string;
  quantity?: number; // Sepet işlemleri için isteğe bağlı adet alanı
}

// =================================================================
// 1. STAR RATING BİLEŞENİ (DÜZELTİLDİ VE ProductDetail DIŞINA TAŞINDI)
// Bu bileşen, birden fazla yerde kullanıldığı için ProductDetail dışında olmalıdır.
const StarRating = ({ rating, size = "w-5 h-5" }:{ rating: number; size?: string }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const isFilled = i <= rating;
    stars.push(
      // SVG ikonunu kullanıyoruz
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        // Tailwind ile fill ve stroke'u ayarlıyoruz
        className={`${size} ${
          isFilled
            ? "text-orange-500 fill-orange-500"
            : "text-gray-300 stroke-gray-300"
        }`}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    );
  }
  return <div className="flex">{stars}</div>;
};
// =================================================================

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));
  const [quantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"info" | "shipping" | "return">(
    "info"
  );

  if (!product) return <div>Ürün bulunamadı</div>;
  // Yorum Verisi
  const reviews = [
    {
      id: 1,
      name: "Aylin Taş",
      comment: "Harika ürün.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sevda Ağaç",
      comment: "Kargo kusursuzdu.",
      rating: 4,
    },
    // ... daha fazla yorum eklenebilir
  ];

  if (!product) return <div>Ürün bulunamadı</div>;
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 gap-10">
        {/* SOL – ÜRÜN CARD VE AÇIKLAMA SEKMELERİ */}
        <div className="flex flex-col gap-10">
          {" "}
          {/* Yeni: flex-col ve gap ekledik */}
          <div className="flex justify-center">
            <div className="relative w-[250px] h-[350px] bg-[#F8F8F8] p-2 rounded-xl">
              {/* ❤️ */}
              <button className="absolute top-3 right-3 bg-white/70 p-2 rounded-full shadow-md hover:bg-white transition">
                <Heart size={20} className="text-red-500" />
              </button>

              {/* SVG ÜRÜN GÖRSELİ */}
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

              {/* ALTTAKİ KÜÇÜK RESİMLER + DIALOG AÇMA */}
              <div className="mt-5 flex">
                {product.images.map((img, index) => (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="rounded-none w-15 h-15 p-5 mr-3"
                      >
                        <img src={img} className="w-10 h-10" />
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Ürün Görseli</DialogTitle>
                      </DialogHeader>

                      <img src={img} className="w-full h-auto rounded-lg" />

                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Kapat</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                ))}
              </div>
            </div>
          </div>
          {/* ====== SEKMELER (RESİMLERİN ALTINDA) - BURAYA TAŞINDI ====== */}
          <div className="mt-20 w-full max-w-lg fs-5">
            {" "}
            {/* max-w-lg ekledim, yorumların genişliği için */}{" "}
            {/* mx-auto veya justify-center kullanarak ortalayabilirsiniz */}
            <div className="flex justify-start gap-6 border-b pb-3">
              {" "}
              {/* justify-start ekledik */}
              {[
                { key: "info", label: "Ürün Açıklaması" },
                { key: "shipping", label: "Ürün Özellikleri" },
                { key: "return", label: "Değerlendirmeler" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as "info" | "shipping" | "return")}
                  className={`pb-2 text-sm font-medium border-b-2 ${
                    activeTab === tab.key
                      ? "border-orange-500 text-orange-600"
                      : "border-transparent text-gray-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="pt-4 text-sm text-gray-700 text-left">
              {" "}
              {/* text-left yaptık */}
              {activeTab === "info" && (
                <p>
                  Sitemizde bulunan tüm Ürün Modelleri SAAT VE SAAT SANAYİ
                  TİCARET A.Ş güvencesi altındadır. Alacağınız bu ürün 2 yıl
                  garanti kapsamındadır. Siparişiniz orijinal kutusu ile
                  anlaşmalı kargo firması (DHL eCommerce) tarafından adresinize
                  teslim edilecektir. Distribütörü olduğumuz markalarımızın
                  garanti belgesi dijital ortamda üretilip sms ve mail ile,
                  yetkili satıcısı olduğumuz markalarımız onaylanmış garanti
                  belgesi ile gönderilmektedir."Aynı gün Kargoda" ibaresi yer
                  alan ürünler "Hızlı Teslimat” seçeneği tercih edildiği
                  takdirde gün içinde teslim edilmektedir. Bu hizmetten 12:00'a
                  kadar faydalanabilirsiniz. Bunun dışındaki siparişleriniz
                  ortalama 3 iş günü içerisinde kargo yetkilisine teslim
                  edilecektir.
                </p>
              )}
              {activeTab === "shipping" && (
                <p>
                  Ürün Bilgisi <br /> Model: G Lace
                  <br />
                  Mekanizma: Quartz <br />
                  Garanti: 2 Yıl <br /> Ağırlık: 78 gr <br />
                  Kasa Yapısı
                  <br />
                  Kasa Renk: Altın Rengi
                  <br /> Kasa Çapı: 34 mm <br />
                  Kasa Kalinlik: 8 mm Kasa Şekli: Yuvarlak Kasa <br />
                  Materyali: Çelik <br />
                  Kasa Taşı: Var <br />
                  Cam Özellik: Mineral
                  <br /> Tarz: Klasik Saatler <br />
                  Özellikler
                  <br /> Su Geçirmezlik: 3 ATM <br />
                  Kronometre: Yok <br />
                  Takvim: Yok
                  <br /> Alarm: Yok.
                </p>
              )}
              {/* ================================================================= */}
              {/* 2. RETURN TAB İÇERİĞİ DÜZELTİLDİ */}
              {activeTab === "return" && (
                <div className="space-y-6">
                  {/* Puan Özeti (Toplam Puanı ve Beğeni Sayısı) */}
                  <div className="flex items-center gap-2 pb-4">
                    <StarRating rating={5} size="w-5 h-5" /> {/* Özet puanı */}
                    <span className="text-gray-600 text-base">120 Beğeni</span>
                  </div>

                  {/* Yorumları Listeleme */}
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="p-4 border rounded-lg bg-white shadow-sm"
                    >
                      {/* Başlık: Avatar, İsim ve Yorum */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div
                            className={`w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold 
                              ${
                                review.id % 2 === 0
                                  ? "bg-orange-400"
                                  : "bg-red-400"
                              }`}
                          >
                            {review.name[0]} {/* İlk harf */}
                          </div>

                          {/* İsim ve Yorum Metni */}
                          <p className="text-base text-gray-800">
                            <span className="font-semibold">
                              {review.name}:
                            </span>{" "}
                            {review.comment}
                          </p>
                        </div>

                        {/* Yorum Puanı */}
                        <StarRating rating={review.rating} size="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {/* ================================================================= */}
            </div>
          </div>
        </div>

        {/* SAĞ TARAF – ÜRÜN BİLGİLERİ */}
        <div className="flex flex-col gap-6">
          <div className="space-y-5">
            {/* Ürün Başlık */}
            <div className="mt-10">
              <h2 className="text-xl font-bold">
                <span className="text-orange-600 mt-30">Ürün Adı:</span>{" "}
                <span className="text-black mt-10">{product.name}</span>
              </h2>
              <p className="mt-3 text-lg text-gray-700 mt-10">
                {product.model}
              </p>
              {/* Saat Ölçüleri Butonu */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-orange-600 border-orange-600 hover:bg-orange-50 px-4 py-2 mt-10"
                  >
                    <Ruler className="w-4 h-4 mr-2" />
                    Saat Ölçüleri
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-[400px]">
                  <DialogHeader>
                    <DialogTitle>Saat Ölçüleri</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center py-4">
                    <img
                      src="/src/assets/images/saatolculeri.png"
                      alt="Saat ölçüleri"
                      className="rounded-md"
                    />
                  </div>
                  <DialogClose asChild>
                    <Button className="w-full bg-orange-500 text-white">
                      Kapat
                    </Button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <div>
                <p className="text-xl mt-10">
                  <span className="text-orange-600">Fiyat:</span>{" "}
                  <span className="font-bold text-black">
                    {product.price} TL
                  </span>
                </p>
              </div>
            </div>

            {/* Adet Arttır / Azalt ve Sepete Ekle */}
            <div className="flex items-center justify-start gap-6 pt-2 ">
              <span className="font-medium text-lg">Adet</span>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 m-10">
                <button>-</button>
                <span className="text-lg font-semibold min-w-[30px] text-center">
                  {quantity}
                </span>
                <button> + </button>
              </div>
              <button
                onClick={() => {
                  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

                  const existingProduct = cart.find(
                    (item:ProductType) => item.id === product.id
                  );

                  if (existingProduct) {
                    existingProduct.quantity += quantity;
                  } else {
                    cart.push({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.images[0], // ✅ ürünün kendi resmi
                      quantity: quantity,
                    });
                  }

                  localStorage.setItem("cart", JSON.stringify(cart));
                  navigate("/sepetim");
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-24 py-4 rounded-lg text-lg font-semibold"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
