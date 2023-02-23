import style from "./style";

import { ElementTypes } from "@/styles/theme/type";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  theme?: ElementTypes;
  className?: string;
}

const Button = ({ children, theme, className, ...rest }: ButtonProps) => {
  const classCombine = `${style[ElementTypes.Common]} ${
    theme ? style[theme] : style[ElementTypes.Default]
  } ${className}`;

  return (
    <button className={classCombine} {...rest}>
      {children}
    </button>
  );
};

export default Button;
