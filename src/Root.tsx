import Header from "./components/ui/common/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/common/Navbar";

function Root() {
  return (
    <>
      <Header />
      <Navbar/>
      <Outlet />
    </>
  );
}

export default Root;
