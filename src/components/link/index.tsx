import Link from "next/link";

interface LinkProps {
  children: React.ReactNode;
  url: string;
}

export default ({ children, url }: LinkProps) => (
  <Link
    href={url}
    className="text-[15px] text-[#fff] hover:text-[#ffcb45] transition"
  >
    {children}
  </Link>
);
