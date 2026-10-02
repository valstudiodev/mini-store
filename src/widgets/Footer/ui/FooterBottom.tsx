import { Link } from 'react-router';
import { footerBottomData } from '../model/footer-data';
import '../styles/footer-bottom.scss';

function FooterBottom(): React.JSX.Element {
  const footerBottom = 'footer-bottom'

  return (
    <div className={`${footerBottom}`}>
      <div className={`${footerBottom}__column`}>
        {footerBottomData.map(({ title, icons }) => (
          <>
            <h4
              key={title}
              className={`${footerBottom}__title`}>
              {title}
            </h4>
            <ul className={`${footerBottom}__list`}>
              {icons.map(({ icon, label, to }) => (
                <li
                  className={`${footerBottom}__item`}
                  key={label}>
                  <Link to={to}>
                    <span className={`${footerBottom}__icon ${icon}`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>

      <div className={`${footerBottom}__copyright`}>
        <p className={`${footerBottom}__copyright-text`}>
          © Copyright 2023 MiniStore. Design by <span>TemplatesJungle</span>
        </p>
      </div>

    </div>
  );
}

export default FooterBottom;