import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}
function Navbar() {
  return (
    <div className="w-full bg-[#F8F8F8] mb-6 mt-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 ">
        <Menubar
          className="w-full h-[50px] d-flex justify-content-center  align-items-lg-center gap-50 px-4 bg-[#F8F8F8]
         "
        >
          <MenubarMenu>
            <MenubarTrigger>
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="w-full text-left"
              >
                Anasayfa
              </button>
            </MenubarTrigger>

            <MenubarTrigger>
              {" "}
              <button
                type="button"
                onClick={() => scrollToSection("kadin")}
                className="w-full text-left"
              >
                Kadın
              </button>
            </MenubarTrigger>

            <MenubarTrigger>
              {" "}
              <button
                type="button"
                onClick={() => scrollToSection("erkek")}
                className="w-full text-left"
              >
                {" "}
                Erkek
              </button>
            </MenubarTrigger>

            <MenubarTrigger>
              <button
                type="button"
                onClick={() => scrollToSection("cocuk")}
                className="w-full text-left"
              >
                {" "}
                Çocuk
              </button>
            </MenubarTrigger>

            <MenubarTrigger>
              <button
                type="button"
                onClick={() => scrollToSection("giyilebilirteknoloji")}
                className="w-full text-left"
              >
                Giyilebilir Teknoloji
              </button>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}

export default Navbar;
