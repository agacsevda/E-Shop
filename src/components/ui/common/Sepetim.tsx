import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import PopularProducts from "./Popülerürünler";

type CartItem = {
  id: number;
  name: string;
  price: number;
  images: string[];
  quantity: number;
};

function Sepetim() {
 
  const navigate = useNavigate();

  // 🔹 İlk açılışta localStorage'tan oku
const [cart, setCart] = useState<CartItem[]>(() => {
  return JSON.parse(localStorage.getItem("cart") || "[]");
});
  // 🔹 Adet artır / azalt
  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    let updatedCart: CartItem[];

    if (type === "increase") {
      updatedCart = cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // 0 olunca sil
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // 🔹 Ürünü tamamen sil
  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // 🔹 Fiyat hesaplamaları
  const araToplam = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const kargo = cart.length > 0 ? 50 : 0;
  const genelToplam = araToplam + kargo;

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Sepetim</h1>

      {cart.length === 0 ? (
        <p>Sepetiniz boş</p>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {/* SOL – ÜRÜNLER */}
          <div className="col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={
                      item.images?.[0] || "/images/placeholder.png"
                    }
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <h3 className="font-semibold">{item.name}</h3>
                </div>

                {/* Adet */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, "decrease")
                    }
                    className="w-8 h-8 border rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(item.id, "increase")
                    }
                    className="w-8 h-8 border rounded"
                  >
                    +
                  </button>
                </div>

                {/* Fiyat + Sil */}
                <div className="text-right">
                  <p className="font-medium">
                    {item.price * item.quantity} TL
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                     className="bg-orange-500 hover:bg-orange-600 text-white text-[10px] px-2 py-1 rounded">
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SAĞ – ÖZET */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-lg font-semibold mb-4">
              Sipariş Özeti
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Ara Toplam</span>
                <span>{araToplam} TL</span>
              </div>

              <div className="flex justify-between">
                <span>Kargo</span>
                <span>{kargo} TL</span>
              </div>

              <hr />

              <div className="flex justify-between font-bold text-lg">
                <span>Genel Toplam</span>
                <span>{genelToplam} TL</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/odeme")}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Devam Et
            </button>
          </div>
        </div>
      )}

      <PopularProducts />
    </div>
  );
}

export default Sepetim;
