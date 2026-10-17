interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

function Section({
  children,
  className = ''
}: SectionProps): React.JSX.Element {
  return (
    <section
      className={className}
    >
      {children}
    </section>
  );
}

export default Section;