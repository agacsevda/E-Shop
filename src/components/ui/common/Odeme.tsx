import  { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Shadcn Form bileşenlerini ve Form ana sarmalayıcısını import ediyoruz
import {
  Form,
  FormControl,

  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // Eklendi
import * as z from "zod"; // Eklendi

// 1. Form şemasını tanımlıyoruz (Zod ile)
const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Kullanıcı adı en az 2 karakter olmalıdır." }),
  address: z.string().min(10, { message: "Lütfen geçerli bir adres giriniz." }),
});

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

function Odeme() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  // 2. Formu tanımlıyoruz
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      address: "",
    },
  });

  // 3. Submit fonksiyonu
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form Verileri:", values);
    alert("Bilgiler Kaydedildi!");
  }

  const araToplam = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const kargo = cart.length > 0 ? 50 : 0;
  const genelToplam = araToplam + kargo;

  return (
    // Tüm yapıyı Form ile sarmalıyoruz
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-7xl mx-auto p-4"
      >
        {/* SOL TARAF: FORM (ACCORDION) */}
        <div className="md:col-span-8 space-y-4">
          <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 md:grid-cols-1 gap-4 p-2"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Müşteri Bilgisi
              </AccordionTrigger>
              <AccordionContent className="p-2 space-y-4 ">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ad Soyad</FormLabel>
                      <FormControl>
                        <Input
                          className=" grid md:grid-cols-2"
                          placeholder="Adınızı giriniz"
                          {...field}
                        />
                      </FormControl>
                      <FormControl>
                        <Input
                          placeholder="Telefon numaranızı giriniz"
                          {...field}
                        />
                      </FormControl>
                      <FormControl>
                        <Input
                          placeholder="Mail adresinizi giriniz"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Teslimat Bilgisi
              </AccordionTrigger>
              <AccordionContent className="p-2 space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ad Soyad</FormLabel>
                      <FormControl>
                        <Input placeholder="Adresinizi giriniz" {...field} />
                      </FormControl>
                      <FormControl>
                        <Input placeholder="İL" {...field} />
                      </FormControl>
                      <FormControl>
                        <Input placeholder="İLÇE" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Kart Bilgisi
              </AccordionTrigger>
              <AccordionContent className="p-2 space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ad Soyad</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Kart numaranızı giriniz"
                          {...field}
                        />
                      </FormControl>
                      <FormControl>
                        <Input placeholder="AY/YIL" {...field} />
                      </FormControl>
                      <FormControl>
                        <Input placeholder="CVC/CVV" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionContent>
            </AccordionItem>

            {/* Diğer AccordionItem'lar buraya... */}
          </Accordion>

          {/* Kaydet butonu artık formun submit butonu olur */}
          <button
            type="submit"
            className="w-40 mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all"
          >
            Kaydet
          </button>
        </div>

        {/* SAĞ TARAF: SİPARİŞ ÖZETİ */}
        <div className="md:col-span-4">
          <div className="bg-white p-6 rounded-xl shadow-md border h-fit">
            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
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
              <div className="flex justify-between font-bold text-lg text-orange-600">
                <span>Genel Toplam</span>
                <span>{genelToplam} TL</span>
              </div>
            </div>
            <button
              type="button" // Siparişi onayla butonu formu submit etmesin diye type="button"
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all"
              onClick={() => alert("Ödeme sayfasına yönlendiriliyorsunuz...")}
            >
              Siparişi Onayla
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default Odeme;
