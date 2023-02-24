import React from "react";
import style from "./style";

import { TypographyTypes } from "@/styles/theme/type";
import { HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  theme: TypographyTypes;
  className?: string;
}

const TsHeading = ({ theme, children, className }: HeadingProps) => {
  const classCombine = `${style[TypographyTypes.Default]} ${
    theme ? style[theme] : style[TypographyTypes.P]
  } ${className ? className : ''}`;

  const Heading = ({ ...props }: HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(theme, props, children);

  return <Heading className={classCombine}>{children}</Heading>;
};

const Input = ({ theme, className, children, ...rest }: HeadingProps) => {
  return <TsHeading theme={theme} children={children} className={className} />;
};

export default Input;
