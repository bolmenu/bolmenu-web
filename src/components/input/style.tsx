import { ElementTypes } from "@/styles/theme/type";

const style = {
  [ElementTypes.Common]:
    "border-[1px] transition outline-0 w-full px-[30px] py-[15px] rounded-[6px]",
  [ElementTypes.Default]: "border-[#cbe2e1] focus:border-[#34807a] placeholder-[#cbe2e1] text-[#34807a]",
  [ElementTypes.Primary]: "",
  [ElementTypes.Secondary]: "",
  [ElementTypes.Hamburger]: "",
  [ElementTypes.Focus]: "border-[#34807a] focus:border-[#34807a] placeholder-[#cbe2e1] text-[#34807a]",
};

export default style;
