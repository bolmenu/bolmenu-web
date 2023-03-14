import { Button, Link } from "@/components";
import { ElementTypes, IconTypes } from "@/styles/theme/type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => (
  <nav className="flex items-center gap-[50px]">
    <Link className="hidden lg:block" href="/about">
      Hakkımızda
    </Link>
    <Link className="hidden lg:block" href="/features">
      Özellikler
    </Link>
    <Link className="hidden lg:block" href="/prices">
      Fiyatlar
    </Link>
    <Link className="hidden lg:block" href="/contact">
      İletişim
    </Link>
    <Button className="hidden lg:block" theme={ElementTypes.Primary}>
      Hemen Deneyin
    </Button>
    <Button className="block lg:hidden" theme={ElementTypes.Hamburger}>
      <FontAwesomeIcon icon={IconTypes.Hamburger} size="1x" color="#054f48" />
    </Button>
  </nav>
);
