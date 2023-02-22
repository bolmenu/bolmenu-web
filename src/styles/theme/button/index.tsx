import { STYLE_TYPE } from "@/styles/theme/type";

const style = {
  [STYLE_TYPE.COMMON]:
    "px-[40px] py-[15px] transition rounded-md text-base font-medium",
  [STYLE_TYPE.DEFAULT]: "bg-[#fff] hover:bg-[#FCC537] text-[#3A6451]",
  [STYLE_TYPE.PRIMARY]: "bg-[#FFCB45] hover:bg-[#FCC537] text-[#3A6451]",
  [STYLE_TYPE.SECONDARY]: "bg-[#3a6451] hover:bg-[#FCC537] text-[#fff]",
};

export default style;
