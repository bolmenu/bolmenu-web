import Head from "next/head";

import { ElementTypes, IconTypes, TypographyTypes } from "@/styles/theme/type";
import { Hero, FeatureBox, Typography, Button } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="container mx-auto">
        <div className="flex flex-wrap mb-[240px]">
          <FeatureBox
            icon={IconTypes.QrCode}
            title="Kolay Kullanım"
            detail="Telefon kamerası ile QR kodu okutarak, kullanıcı dostu arayüzlü menüye hızlı ulaşabilirsiniz."
          />
          <FeatureBox
            icon={IconTypes.Wordpress}
            title="Kolay Yönetim"
            detail="WordPress alt yapısı ile menü içeriğinizi kolaylıkla yönetebilir ve değişiklik yapabilirsiniz."
          />
          <FeatureBox
            icon={IconTypes.Design}
            title="Tasarım"
            detail="Menünüzü kendinize özel logo, renk ve font seçenekleri ile kişiselleştirebilirsiniz."
          />
          <FeatureBox
            icon={IconTypes.Coin}
            title="Düşük Maliyet"
            detail="Menü değişimi, yenileme ve yeni menü gibi fiziki maliyetlere son."
          />
          <FeatureBox
            icon={IconTypes.Seedling}
            title="Çevre Dostu"
            detail="Kağıt ürünleri kullanmadan yeşili koruyoruz."
          />
          <FeatureBox
            icon={IconTypes.Chart}
            title="İstatistik"
            detail="Müşterilerinizin ürün tercihlerinin analitik ve istatistik raporlarını inceleyin."
          />
        </div>
        <div className="flex gap-[100px] items-center mb-[300px]">
          <figure className="w-[50%] relative">
            <div className="w-[100%] h-[753px] bg-[#ffcb45] rounded-full flex items-center justify-center pb-[100px]">
              <img
                src="/assets/img/demo.webp"
                srcSet="/assets/img/demo.webp 1x, /assets/img/demo@2x.webp 2x, /assets/img/demo@3x.webp 3x"
                alt="Bolmenu Demo"
              />
            </div>
          </figure>
          <article className="w-[50%]">
            <Typography
              theme={TypographyTypes.H5}
              className="text-[#ffcb45] mb-[30px]"
            >
              HAKKIMIZDA
            </Typography>
            <Typography
              theme={TypographyTypes.H2}
              className="text-[#054f48] mb-[15px]"
            >
              Bolmenu nedir?
            </Typography>
            <Typography
              theme={TypographyTypes.P}
              className="text-[#8d8d8d] mb-[15px] text-[21px]"
            >
              Bolmenu bir QR sistemi ile menüye ulaşabileceğiniz yazılım
              sistemidir.
            </Typography>
            <Typography
              theme={TypographyTypes.P}
              className="text-[#8d8d8d] mb-[15px] text-[21px]"
            >
              Bolmenu ile menü içeriğinizi kolayca değiştirebilir, kendi logonuz
              ve renkleriniz ile tasarımınızı kişiselleştirebilir ve kullanıcı
              istatistiklerini takip edebilirsiniz.
            </Typography>
            <Typography
              theme={TypographyTypes.P}
              className="text-[#8d8d8d] mb-[15px] text-[21px]"
            >
              Menü yıpranması, fiyat değişiklikleri, menü yenileme vb. gibi
              maliyetli işlemleri; hızlı bir şekilde maliyetsiz çözün. Ayrıca
              kağıt israfının önüne geçerek doğayı koruyun.
            </Typography>
          </article>
        </div>
        <div className="flex items-center justify-between mb-[300px]">
          <article className="w-[50%]">
            <Typography
              theme={TypographyTypes.H5}
              className="text-[#ffcb45] mb-[30px]"
            >
              DEMO MENÜ
            </Typography>
            <Typography
              theme={TypographyTypes.H2}
              className="text-[#054f48] mb-[15px]"
            >
              Demo menümüzü inceleyin.
            </Typography>
            <Typography
              theme={TypographyTypes.P}
              className="text-[#8d8d8d] mb-[15px] text-[21px]"
            >
              Telefon kamerası ile QR kodunu okutarak ya da butona tıklayarak
              demo menümüzü inceleyin.
            </Typography>
            <Typography
              theme={TypographyTypes.P}
              className="text-[#8d8d8d] mb-[30px] text-[21px]"
            >
              İnceleme sonrasında olumlu/olumsuz yorumlarınızı bize email
              üzerinden iletebilirsiniz.
            </Typography>
            <Button theme={ElementTypes.Secondary}>Demo Menü</Button>
          </article>
          <figure className="flex items-center justify-center shadow-[0_0_6px_0_rgba(0,0,0,0.16)] w-[460px] h-[460px] rounded-[10px]">
            <img
              src="/assets/img/qr-code.webp"
              srcSet="/assets/img/qr-code.webp 1x, /assets/img/qr-code@2x.webp 2x, /assets/img/qr-code@3x.webp 3x"
              alt="Demo Menu"
            />
          </figure>
        </div>
      </div>
      <section className="bg-[url('/assets/img/wp-background.jpg')] bg-cover bg-center px-[150px] py-[150px]">
        <div className="container mx-auto">
          <article className="w-[50%]">
            <Typography
              theme={TypographyTypes.H1}
              className="text-[#ffcb45] mb-[15px]"
            >
              Hemen İletişime Geçin
            </Typography>
            <Typography
              theme={TypographyTypes.P}
              className="text-[#fff] mb-[30px] text-[21px]"
            >
              İnceleme sonrasında olumlu/olumsuz yorumlarınızı bize email
              üzerinden iletebilirsiniz.
            </Typography>
            <Button theme={ElementTypes.Default}>İletişime Geçin</Button>
          </article>
        </div>
      </section>
      <footer className="bg-[#f2f6f5]">
        <div className="border-b-[1px] border-[#054f48]/[.1] py-[100px]">
          <div className="container">
            
          </div>
        </div>
        <div>
          <div className="container py-[50px]">

          </div>
        </div>
      </footer>
      {/* <section className="bg-[#054f48]/[.05] px-[100px] py-[100px]">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <Typography
              theme={TypographyTypes.H5}
              className="text-[#054f48] mb-[30px]"
            >
              MÜŞTERİLERİMİZ
            </Typography>
          </div>
        </div>
      </section> */}
    </>
  );
}
