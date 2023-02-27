import {
  faUser,
  faBuilding,
  faPhone,
  faEnvelope,
  faQrcode,
  faPalette,
  faCoins,
  faSeedling,
  faChartPie,
} from "@fortawesome/free-solid-svg-icons";

import { faWordpress } from "@fortawesome/free-brands-svg-icons";

export enum ElementTypes {
  Common = "COMMON",
  Default = "DEFAULT",
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Focus = "FOCUS",
}

export enum TypographyTypes {
  Default = "DEFAULT",
  Error = "span",
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export const IconTypes = {
  Person: faUser,
  Building: faBuilding,
  Phone: faPhone,
  Envelope: faEnvelope,
  QrCode: faQrcode,
  Wordpress: faWordpress,
  Design: faPalette,
  Coin: faCoins,
  Seedling: faSeedling,
  Chart: faChartPie,
};
