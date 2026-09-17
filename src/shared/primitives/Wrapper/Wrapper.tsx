interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

function Wrapper({
  children,
  className = ''
}: WrapperProps): React.JSX.Element {
  return (
    <div
      className={`${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default Wrapper;