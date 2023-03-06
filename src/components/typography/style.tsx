import { TypographyTypes } from "@/styles/theme/type";

const style = {
  [TypographyTypes.Default]: "",
  [TypographyTypes.H1]: "text-[53px] font-['Playfair_Display'] font-bold",
  [TypographyTypes.H2]: "text-[43px] font-bold",
  [TypographyTypes.H3]: "text-[21px]",
  [TypographyTypes.H4]: "text-[21px] font-bold",
  [TypographyTypes.H5]: "text-[13px] font-bold tracking-[1.3px]",
  [TypographyTypes.H6]: "text-[15px] text-[#054f48]",
  [TypographyTypes.P]: "text-[17px]",
  [TypographyTypes.Error]: "text-[13px] pl-[5px] pt-[5px] text-[#FF3B41] transition absolute",
};

export default style;
