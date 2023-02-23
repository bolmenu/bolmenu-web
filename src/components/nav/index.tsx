import { Button, Link } from "@/components";
import { ElementTypes } from "@/styles/theme/type";

export default () => (
  <nav className="flex items-center gap-[50px]">
    <Link href="/about">Hakkımızda</Link>
    <Link href="/features">Özellikler</Link>
    <Link href="/prices">Fiyatlar</Link>
    <Link href="/contact">İletişim</Link>
    <Button theme={ElementTypes.Primary}>Hemen Deneyin</Button>
  </nav>
);
