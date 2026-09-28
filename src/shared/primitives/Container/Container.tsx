interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: number | string,
}

function Container({
  maxWidth = 1360,
  className = '',
  children,
  ...props
}: ContainerProps): React.JSX.Element {
  return (
    <div
      {...props}
      className={`container mx-auto px-3.75 ${className}`}
      style={{ ...props.style, maxWidth }}
    >
      {children}
    </div>
  );
}

export default Container;