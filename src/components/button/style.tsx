import { ElementTypes } from "@/styles/theme/type";

const style = {
  [ElementTypes.Common]:
    "px-[40px] py-[15px] transition rounded-md text-base font-medium",
  [ElementTypes.Default]: "bg-[#fff] hover:bg-[#FCC537] text-[#3A6451]",
  [ElementTypes.Primary]: "bg-[#FFCB45] hover:bg-[#FCC537] text-[#3A6451]",
  [ElementTypes.Secondary]: "bg-[#3a6451] hover:bg-[#FCC537] text-[#fff]",
  [ElementTypes.Hamburger]: "!px-[20px] bg-[#FFCB45] hover:bg-[#FCC537] text-[#3A6451]",
};

export default style;
