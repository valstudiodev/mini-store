import '../styles/footerTitle.scss';

interface FooterTitleProps {
  children: React.ReactNode;
  className?: string;
}

function FooterTitle({
  children,
  className = ''
}: FooterTitleProps): React.JSX.Element {
  const clFooterTitle = 'footer-title'

  return (
    <h3 className={`${clFooterTitle} ${className}`}>
      {children}
    </h3>
  );
}

export default FooterTitle;

