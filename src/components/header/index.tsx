import { Navigation } from "@/components";

export default () => (
  <header className="flex items-center justify-between">
    <a href="#">
      <img
        src="/assets/img/logo.webp"
        srcSet="/assets/img/logo.webp 1x, /assets/img/logo@2x.webp 2x, /assets/img/logo@3x.webp 3x"
        alt="Bolmenu"
      />
    </a>
    <Navigation />
  </header>
);
