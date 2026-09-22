import '../styles/filre-section.scss';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

function FilterSection({
  title,
  children,
  className = ''
}: FilterSectionProps): React.JSX.Element {
  const filterSection = 'filter-section'

  return (
    <section className={`${filterSection} ${className}`}>
      <h3 className={`${filterSection}__title`}>{title}</h3>
      {children}
    </section>
  );
}

export default FilterSection;