import React, { ChangeEventHandler, useState } from "react";
import InputMask from "react-input-mask-next";
import style from "./style";

import { ElementTypes, TypographyTypes } from "@/styles/theme/type";
import { InputHTMLAttributes } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "..";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: ElementTypes;
  className?: string;
  icon?: IconDefinition;
  error?: string | false | undefined;
  mask?: string;
}

const Input: React.FC<InputProps> = ({
  theme,
  className,
  icon,
  error,
  mask,
  ...rest
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const classes = {
    base: style[
      // valueState ? ElementTypes.Focus : theme ? theme : ElementTypes.Default
      theme ? theme : ElementTypes.Default
    ],
    common: style[ElementTypes.Common],
    iconBase: icon ? "pl-[60px]" : "",
  };

  const classCombine = `${classes.common} ${classes.base} ${className} ${classes.iconBase}`;

  return (
    <div className="relative">
      <div className="relative w-full flex items-center">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={`absolute transition left-[30px] ${
              isFocus ? "text-[#34807a]" : "text-[#cbe2e1]"
            }`}
          />
        )}
        <InputMask
          mask={mask ? mask : ""}
          className={classCombine}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          {...rest}
        />
      </div>
      {error && <Typography theme={TypographyTypes.Error}>{error}</Typography>}
    </div>
  );
};

export default Input;
