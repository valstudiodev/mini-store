import LinkBase from "@/shared/ui/LinkBase/ui/LinkBase";
import { FooterColumnData } from "../model/types";
import FooterTitle from "./FooterTitle";
import '../styles/footerColumn.scss';
import { useTranslation } from "react-i18next";

function FooterColummn({
  title,
  items,
  className = ''
}: FooterColumnData): React.JSX.Element {
  const clFooterColumn = 'footer-column'

  const { t } = useTranslation()

  return (
    <div className={`${clFooterColumn} ${className}`}>
      <FooterTitle className={`${clFooterColumn}__title`}>
        {title}
      </FooterTitle>
      <ul className={`${clFooterColumn}__list`}>
        {items.map((item) => (
          <li
            className={`${clFooterColumn}__item`}
            key={item.label}
          >
            {item.type === 'link' ? (
              <LinkBase
                to={item.to}
                className={`${clFooterColumn}__link`}
              >
                {t(item.label)}
              </LinkBase>
            ) : (
              <a
                href={item.href}
                className={`${clFooterColumn}__contact`}
              >
                <span className={`${clFooterColumn}__label`}>
                  {item.label}
                </span>
                <span className={`${clFooterColumn}__value`}>
                  {item.value}
                </span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColummn;