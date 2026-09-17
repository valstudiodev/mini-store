interface PageProps {
  children: React.ReactNode;
  className?: string;
}

function Page({
  children,
  className = ''
}: PageProps): React.JSX.Element {
  return (
    <main
      className={`${className}`.trim()}
    >
      {children}
    </main>
  );
}

export default Page;