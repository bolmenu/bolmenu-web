import style from "./style";

import { ElementTypes } from "@/styles/theme/type";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: ElementTypes;
  className?: string;
}

const Input = ({ theme, className, ...rest }: InputProps) => {
  const classCombine = `${style[ElementTypes.Common]} ${
    theme ? style[theme] : style[ElementTypes.Default]
  } ${className}`;

  return <input {...rest} className={classCombine} />;
};

export default Input;
