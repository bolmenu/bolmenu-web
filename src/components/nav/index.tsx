import { Button, Link } from "@/components";

export default () => (
  <nav className="flex items-center gap-[50px]">
    <Link url="/about">Hakkımızda</Link>
    <Link url="/features">Özellikler</Link>
    <Link url="/prices">Fiyatlar</Link>
    <Link url="/contact">İletişim</Link>
    <Button>Hemen Deneyin</Button>
  </nav>
);
