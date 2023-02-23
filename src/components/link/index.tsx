import style from "./style";

import { ElementTypes } from "@/styles/theme/type";
import Link, { LinkProps } from "next/link";

interface ILinkProps extends LinkProps {
  children: React.ReactNode;
  theme?: ElementTypes;
  className?: string;
}

export default ({ children, theme, className, ...rest }: ILinkProps) => {
  const classCombine = `${style[ElementTypes.Common]} ${
    theme ? style[theme] : style[ElementTypes.Default]
  } ${className}`;

  return (
    <Link className={classCombine} {...rest}>
      {children}
    </Link>
  );
};
