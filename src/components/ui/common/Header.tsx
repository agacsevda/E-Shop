import { Link } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Search } from "lucide-react";
import { Heart, ShoppingCart, User } from "lucide-react";

import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  quantity: number;
};


export default function Header() {
    const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
  const updateCartCount = () => {
    const cart: CartItem[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    setCartCount(totalQuantity);
  };

  updateCartCount();

  window.addEventListener("cartUpdated", updateCartCount);

  return () => {
    window.removeEventListener("cartUpdated", updateCartCount);
  };
}, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-orange-600">
        <img src="/public/images/logo.png" alt="logo" className="w-[100px] h-[28px]" />
        </Link>

        {/* Search */}
        <div className= "w-[675px] h-[44px]">
          <InputGroup>
            <InputGroupInput placeholder="Aramak istediğiniz ürünü yazınız." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton></InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 ">
          <Heart className="cursor-pointer" />
         <Link to="/sepetim" className="relative">
  <ShoppingCart className="cursor-pointer" />

  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</Link>
          <User className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
