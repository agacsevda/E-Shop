import  { useEffect, useState } from "react";
import PopularProducts from "./Popülerürünler";
import { useNavigate } from "react-router-dom";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

function Sepetim() {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 🔹 Sayfa açılır açılmaz localStorage'tan sepeti oku
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // 🔹 Hesaplamalar
  const araToplam = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const updateQuantity = (id: number, type: "increase" | "decrease") => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (type === "increase") {
          return { ...item, quantity: item.quantity + 1 };
        }
        if (type === "decrease" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const kargo = cart.length > 0 ? 50 : 0;
  const genelToplam = araToplam + kargo;
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-8">Sepetim</h1>

      {cart.length === 0 ? (
        <p>Sepetiniz boş</p>
      ) : (
        <div className="grid grid-cols-3 gap-10">
          {/* SOL – ÜRÜN LİSTESİ */}
          <div className="col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-5 rounded-xl shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <h3 className="font-semibold">{item.name}</h3>
                </div>

                {/* Adet */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, "decrease")}
                    className="w-8 h-8 border rounded"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, "increase")}
                    className="w-8 h-8 border rounded"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="mt-1 font-medium">{item.price} TL</p>
                </div>
              </div>
            ))}
          </div>

          {/* SAĞ – SİPARİŞ ÖZETİ */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-lg font-semibold mb-4">Sipariş Özeti</h2>

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
