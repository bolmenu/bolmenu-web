import { Header, Button, Input } from "@/components";
import { ElementTypes } from "@/styles/theme/type";

export default () => {
  return (
    <div className="top-0 left-0 z-[-1] bg-[url('/assets/img/hero-background.jpg')] bg-cover bg-center w-[100vw] h-[70vh] pt-[50px]">
      <div className="container mx-auto relative">
        <Header />
        <section className="flex mt-[200px] gap-[30px]">
          <article className="w-[50%]">
            <h2 className="font-['Playfair_Display'] text-[53px] font-bold text-[#ffcb45]">
              Menü oluşturmanın en kolay ve ucuz yolu
            </h2>
            <p className="text-[21px] text-[#fff] mt-[30px]">
              Bolmenu’nün mobil sipariş ve hızlı ödeme özelliği, ortalama
              sipariş miktarını %20 artırır, masa başına 15 dakika kazandırır ve
              %40 daha fazla bahşiş almanızı sağlar.
            </p>
          </article>
          <figure className="w-[50%] relative">
            <div className="w-[100%] h-[753px] bg-[#ffcb45] rounded-full flex items-center justify-center pb-[100px]">
              <img
                src="/assets/img/demo.webp"
                srcSet="/assets/img/demo.webp 1x, /assets/img/demo@2x.webp 2x, /assets/img/demo@3x.webp 3x"
                alt="Bolmenu Demo"
              />
            </div>
          </figure>
        </section>
        <section className="bg-[#fff] p-[60px] shadow-lg w-[100%] rounded-[10px] translate-y-[-100%]">
          <h3 className="text-[#054f48] text-[43px] font-bold">
            Bizimle iletişime geçin
          </h3>
          <p className="text-[#34807a] text-[17px] mt-[10px]">
            Hızlı bir şekilde formu doldurun, size ulaşalım.
          </p>
          <div className="flex columns-5 gap-[30px] mt-[30px]">
            <Input placeholder="Ad-Soyad" />
            <Input placeholder="İşletme Adı" />
            <Input placeholder="Telefon" />
            <Input placeholder="Mail" />
            <Button theme={ElementTypes.Secondary}>Gönder</Button>
          </div>
        </section>
      </div>
    </div>
  );
};
