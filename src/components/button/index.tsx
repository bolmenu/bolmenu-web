interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="px-10 py-4 bg-[#FFCB45] hover:bg-[#FCC537] transition rounded-md text-base font-medium text-[#3A6451]" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
