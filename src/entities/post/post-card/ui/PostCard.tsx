import { Link } from "react-router";
import { PostCardProps } from "../../model/post-types";
import '../styles/post-card.scss';
import { routeMap } from "@/app/routes/routeMap";


function PostCard({
  post,
  className = ''
}: PostCardProps): React.JSX.Element {
  const postCard = 'post-card'

  return (
    <article className={`${postCard} ${className}`}>
      <Link
        to={routeMap.blogPost.navigate(post.id)}
        className={`${postCard}__link`}
      >
        <div className={`${postCard}__image`}>
          <img src={post.imageUrl} alt={post.title} />
        </div>
        <div className={`${postCard}__content`}>
          <div className={`${postCard}__wrap`}>
            <span className={`${postCard}__date`}>
              {post.date}
            </span>
            <span className={`${postCard}__category`}>
              {post.category}
            </span>
          </div>
          <h3 className={`${postCard}__title`}>
            {post.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}

export default PostCard;