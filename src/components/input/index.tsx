import React, { ChangeEventHandler, useState } from "react";
import style from "./style";

import { ElementTypes } from "@/styles/theme/type";
import { InputHTMLAttributes } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: ElementTypes;
  className?: string;
  icon?: IconDefinition;
  error?: string;
}

const Input = ({ theme, className, icon, error, ...rest }: InputProps) => {
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
    <div>
      <div className="relative w-full flex items-center">
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className={`absolute transition left-[30px] ${
              isFocus ? "text-[#34807a]" : "text-[#cbe2e1]"
            }`}
          />
        )}
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className={classCombine}
          {...rest}
        />
      </div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
