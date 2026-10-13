import { Link } from 'react-router';
import { socialLinksData } from '../model/blogSocialLinks-data';
import '../styles/blogSocialLinks.scss';

function BlogSocialLinks(): React.JSX.Element {
  const blogSocialLinks = 'blog-social-links'

  return (
    <div className={blogSocialLinks}>
      <h3 className={`${blogSocialLinks}__title`}>
        Social links
      </h3>
      <ul className={`${blogSocialLinks}__list`}>
        {socialLinksData.map((link) => (
          <li
            key={link.value}
            className={`${blogSocialLinks}__item`}
          >
            <Link
              to={link.path}
              className={`${blogSocialLinks}__link`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogSocialLinks;