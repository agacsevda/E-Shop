import Header from "./components/ui/common/Header";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/ui/common/Navbar";
import Footer from "./components/ui/common/Footer";

function Root() {
 
  // location objesi otomatik olarak 'Location' tipinde gelir
  const location = useLocation();

  // Dizideki yollardan herhangi biriyle eşleşirse true döner
 const isCheckoutPage = location.pathname === "/odeme";
  return (
    <>
   { isCheckoutPage && <Header />}
      {!isCheckoutPage && <Navbar />}
      
      <main>
        <Outlet />
      </main>

      {!isCheckoutPage && <Footer />}
    </>
  );
}

export default Root;
