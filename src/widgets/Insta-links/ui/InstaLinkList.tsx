import { Link } from "react-router";
import { instaLinks } from "../model/instaLink-data";


function InstaLinksList(): React.JSX.Element {
  const instaLinksList = 'insta-links-list'

  return (
    <ul className={instaLinksList}>
      {instaLinks.map((item) => (
        <li
          key={item.id}
          className={`${instaLinksList}__item`}
        >
          <Link
            to='/'
            className={`${instaLinksList}__link`}
          >
            <img
              className={`${instaLinksList}__image`}
              src={item.image} alt='image link to instagram' />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default InstaLinksList;