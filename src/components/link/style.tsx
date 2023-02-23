import { ElementTypes } from "@/styles/theme/type";

const style = {
  [ElementTypes.Common]: "text-[15px] transition",
  [ElementTypes.Default]: "text-[#fff] hover:text-[#ffcb45]",
  [ElementTypes.Primary]: "text-[#054f48] hover:text-[#ffcb45]",
  [ElementTypes.Secondary]: "text-[#054f48] hover:text-[#ffcb45] font-bold",
};

export default style;
