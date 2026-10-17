import { useTranslation } from 'react-i18next';
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

  const { t } = useTranslation()

  return (
    <div className={`${contactHeader} ${className}`}>
      <h3 className={`${contactHeader}__title`}>{t(title)}</h3>
      <p className={`${contactHeader}__text`}>{t(text)}</p>
    </div>
  );
}

export default ContactHeader;