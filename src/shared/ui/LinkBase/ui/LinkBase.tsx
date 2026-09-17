import { Link } from "react-router";

interface LinkBaseProps {
  children: React.ReactNode;
  className?: string;
  to: string;
}

function LinkBase({
  children,
  to,
  className = '',
  ...props
}: LinkBaseProps) {
  const clLink = 'link'
  return (
    <Link
      {...props}
      className={`${clLink} ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkBase;