interface HeadingTitleProps {
  className?: string;
  children: React.ReactNode;
}

function HeadingTitle({
  className = '',
  children
}: HeadingTitleProps): React.JSX.Element {
  const classHeadingTitle = 'heading-title'

  const baseStyles = [
    'text-center'
  ].join(' ')

  return (
    <h1 className={`${classHeadingTitle} ${className} ${baseStyles}`}>
      {children}
    </h1>
  );
}

export default HeadingTitle;