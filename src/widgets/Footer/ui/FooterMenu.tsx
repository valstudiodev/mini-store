import { footerColumns } from '@/widgets/Footer/routes/routeMap';
import '../styles/footerMenu.scss';
import FooterColummn from './FooterColumn';
import FooterContacts from './FooterContacts';
import { useTranslation } from 'react-i18next';

function FooterMenu({
  className = ''
}: { className?: string }): React.JSX.Element {
  const clFooterMenu = 'footer-menu'

  const { t } = useTranslation()

  return (
    <div className={`${clFooterMenu} ${className}`}>
      {footerColumns.map((column) => (
        <FooterColummn
          key={column.title}
          items={column.items}
          title={t(column.title)}
        />
      ))}

      <FooterContacts title='Contact us' />
    </div>
  );
}

export default FooterMenu;