import { Link } from "react-router-dom";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

import { Search } from "lucide-react";
import { Heart, ShoppingCart, User } from "lucide-react";
import logo from "@/assets/images/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-orange-600">
        <img src={logo} alt="logo" className="w-[100px] h-[28px]" />
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
          <ShoppingCart className="cursor-pointer" />
          <User className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
