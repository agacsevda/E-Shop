import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import products from "@/Data/products.json";
import { Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  if (!product) return <div>Ürün bulunamadı</div>;

  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-2 gap-10">
        {/* SOL – ÜRÜN CARD */}
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

     {/* SAĞ TARAF – ÜRÜN BİLGİLERİ */}
     <div className="flex flex-col justify-between">
          <div className="space-y-5">
            {/* Ürün Başlık */}
            <div>
              <h2 className="text-xl font-bold">
                <span className="text-orange-600">Ürün Adı:</span>{" "}
                <span className="text-black">{product.name}</span>
              </h2>
              <p className="mt-3 text-lg text-gray-700">{product.model}</p>
            </div>

            {/* Saat Ölçüleri Butonu */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="text-orange-600 border-orange-600 hover:bg-orange-50 px-4 py-2"
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

            {/* Fiyat */}
            <div>
              <p className="text-xl">
                <span className="text-orange-600">Fiyat:</span>{" "}
                <span className="font-bold text-black">{product.price} TL</span>
              </p>
            </div>
          </div>

         {/* Adet Arttır / Azalt ve Sepete Ekle - ALTTA, THUMBNAIL'LERLE HİZALI */}
         <div className="flex items-center justify-center gap-10 mt-auto">
            <span className="font-medium text-lg">Adet</span>
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-bold flex items-center justify-center transition-colors"
              >
                -
              </button>
              <span className="text-lg font-semibold min-w-[30px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-xl font-bold flex items-center justify-center transition-colors"
              >
                +
              </button>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-24 py-4 rounded-lg text-lg font-semibold transition-colors">
              Sepete Ekle
            </button>
          </div>
</div>
      {/* AÇILIP KAPANAN BİLGİLER */}
      <div className="mt-30">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              Ürün bilgileri buraya gelecek...
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              Kargo detayları buraya gelecek...
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              İade politikası buraya gelecek...
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    </div>
  );
}

export default ProductDetail;
