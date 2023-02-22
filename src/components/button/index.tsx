import { ButtonStyle } from "@/styles/theme";
import { STYLE_TYPE } from "@/styles/theme/type";

interface ButtonProps {
  children: React.ReactNode;
  type?: STYLE_TYPE.DEFAULT | STYLE_TYPE.PRIMARY | STYLE_TYPE.SECONDARY | null;
  onClick?: () => void;
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  return (
    <button
      className={`${ButtonStyle[STYLE_TYPE.COMMON]} ${
        type ? ButtonStyle[type] : ButtonStyle[STYLE_TYPE.DEFAULT]
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
