import Header from "./components/ui/common/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/common/Navbar";
import Footer from "./components/ui/common/Footer";

function Root() {
  return (
    <>
      <Header />
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
