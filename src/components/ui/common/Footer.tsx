import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-[#FF6605]/10  text-black fw-bold py-8 mt-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
          {/* Sol */}
          <div>
            <img
              src="/src/assets/images/logo.png"
              alt="logo"
              className="w-[100px] h-[50px]"
            />
            <h2 className="text-lg font-semibold text-black fw-bold mb-2"></h2>
            <p className="text-sm text-black fw-bold">
              Modern ve kullanıcı dostu alışveriş deneyimi.
            </p>
            <img
              src="/src/assets/images/sosyalmedya.png"
              alt="logo"
              className="w-[200px] h-[80px] mt-6"
            />
          </div>

          {/* Orta */}
          <div>
            <h3 className="text-sm font-bold text-black fw-bold mb-3">
              E-Shop
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black fw-bold">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black fw-bold">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  Kvkk
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
                  SSS
                </a>
              </li>
            </ul>
          </div>

          {/* Sağ */}
          <div>
            <h3 className="text-sm font-bold text-black mb-3">
              Kategoriler
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-black fw-bold">
                  Kadın
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black fw-bold">
                Erkek
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black">
               Çocuk
                </a>
              </li>
                <li>
                <a href="#" className="hover:text-black">
               Giyilebilir Teknoloji
                </a>
              </li>
            </ul>
          </div>

          {/* Sağ */}
          <div>
            <h3 className="text-sm font-semibold text-black mb-3"></h3>
               <img
              src="/src/assets/images/mobilindirme.png"
              alt="logo"
              className="w-[100px] h-[100px] mt-6"
            />
          </div>
        </div>

        <div className="border-t border-black mt-8 pt-4 text-center text-sm text-black">
          © 2025 E-Shop. Tüm hakları saklıdır.
        </div>
      </footer>
    </>
  );
}

export default Footer;
