export enum BUTTON_TYPES {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

interface ButtonProps {
  children: React.ReactNode;
  type?: BUTTON_TYPES.PRIMARY | BUTTON_TYPES.SECONDARY;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="px-[40px] py-[15px] bg-[#FFCB45] hover:bg-[#FCC537] transition rounded-md text-base font-medium text-[#3A6451] w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
