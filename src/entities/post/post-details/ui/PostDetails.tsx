import { PostDetails } from "../../model/post-types";
import { postDetailsData } from "../../model/postDetailsData";
import PostContentRenderer from "../../post-content-renderer/ui/PostContentRenderer";
import '../styles/post-details.scss';

interface PostDetailsProps {
  post: PostDetails;
  className?: string
}

function PostDetailsPage({
  post,
  className = ''
}: PostDetailsProps): React.JSX.Element {
  const postDetails = 'post-details'

  return (
    <article className={`${postDetails} ${className}`}>
      <div className={`${postDetails}__info`}>
        <div className={`${postDetails}__wrap`}>
          <span className={`${postDetails}__date`}>
            {post.date}
          </span>
          <span className={`${postDetails}__category`}>
            {post.category}
          </span>
        </div>
        <h3 className={`${postDetails}__title`}>
          {post.title}
        </h3>
        <div className={`${postDetails}__image`}>
          <img src={post.imageUrl} alt={post.title} />
        </div>
      </div>
      {postDetailsData.content.map((block, index) => (
        <PostContentRenderer
          key={index}
          block={block}
        />
      ))}
    </article>
  );
}

export default PostDetailsPage;