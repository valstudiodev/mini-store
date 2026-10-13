import '../styles/contact-header.scss';

interface ContactHeaderProps {
  title: string,
  text: string;
  className?: string;
}

function ContactHeader({
  title,
  text,
  className = ''
}: ContactHeaderProps): React.JSX.Element {
  const contactHeader = 'contact-header'

  return (
    <div className={`${contactHeader} ${className}`}>
      <h3 className={`${contactHeader}__title`}>{title}</h3>
      <p className={`${contactHeader}__text`}>{text}</p>
    </div>
  );
}

export default ContactHeader;