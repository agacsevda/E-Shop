import Header from "./components/ui/common/Header";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/ui/common/Navbar";
import Footer from "./components/ui/common/Footer";

function Root() {
  const location = useLocation();

  // Eğer yol "/odeme" ise true döner
  const isCheckoutPage = location.pathname === "/odeme";

  return (
    <>
      {/* 1. Header: Her sayfada olduğu için koşulsuz ekledik */}
      <Header />

      {/* 2. Navbar: Sadece ödeme sayfası DEĞİLSE görünür */}
      {!isCheckoutPage && <Navbar />}
      
      <main>
        <Outlet />
      </main>

      {/* 3. Footer: Sadece ödeme sayfası DEĞİLSE görünür */}
      {!isCheckoutPage && <Footer />}
    </>
  );
}

export default Root;
