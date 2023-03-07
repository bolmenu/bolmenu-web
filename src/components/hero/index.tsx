import { Header, Typography, HeroContact } from "@/components";
import { TypographyTypes } from "@/styles/theme/type";

export default () => {
  return (
    <div className="relative pt-[50px]">
      <div className="absolute top-0 left-0 z-[-1] bg-[url('/assets/img/hero-background.jpg')] bg-cover bg-center w-[100vw] h-[70vh] min-h-[930px]"></div>
      <div className="container mx-auto relative">
        <Header />
        <section className="flex mt-[200px] gap-[30px] min-h-[626px] max-h-[calc(70vh_-_(200px_+_54px_+_50px))]">
          <article className="w-[50%]">
            <Typography theme={TypographyTypes.H1} className="text-[#ffcb45]">
              Menü oluşturmanın en kolay ve ucuz yolu
            </Typography>
            <Typography
              theme={TypographyTypes.H3}
              className="text-[#fff] mt-[30px]"
            >
              Bolmenu’nün mobil sipariş ve hızlı ödeme özelliği, ortalama
              sipariş miktarını %20 artırır, masa başına 15 dakika kazandırır ve
              %40 daha fazla bahşiş almanızı sağlar.
            </Typography>
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
        <HeroContact />
      </div>
    </div>
  );
};
