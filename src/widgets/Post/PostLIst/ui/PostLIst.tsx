import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { PostCategoryProps } from "@/entities/post/model/post-types";
import { selectPosts, selectPostsLoading } from "@/entities/post/model/postSelector";
import PostCard from "@/entities/post/post-card/ui/PostCard";
import { selectHasLoaded } from "@/entities/product/model/productSelector";
import '../styles/post-list.scss';
import WarningMessage from "@/shared/ui/WarningMessage/ui/WarningMessage";
import filterPosts from "@/entities/post/model/filterPosts";
import { routeMap } from "@/app/routes/routeMap";
import UpdateButton from "@/shared/ui/UpdateButton/ui/UpdateButton";
import DeleteButton from "@/shared/ui/DeleteButton/ui/DeleteButton";
import { deletePost } from "@/entities/post/model/postThunk";
import { useState } from "react";
import { selectAuthUser } from "@/features/auth/model/authSelector";

function PostList({
  category,
  limit
}: PostCategoryProps): React.JSX.Element {
  const postList = 'post-list'

  const dispatch = useAppDispatch()
  const user = useAppSelector(selectAuthUser)

  const [error, setError] = useState<string | null>(null);

  const posts = useAppSelector(selectPosts)
  const hasLoaded = useAppSelector(selectHasLoaded)
  const isLoading = useAppSelector(selectPostsLoading)

  const filteredPosts = filterPosts(posts, category)

  const displayedPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts

  const isAdmin = user?.role === 'admin'

  const handleDelete = async (postId: string): Promise<void> => {
    setError(null)

    try {
      await dispatch(deletePost(postId)).unwrap()
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Failed to delete a post')
      }
    }
  }

  if (isLoading) {
    return <div className="text-center text-4xl">Loading POSTS...</div>
  }

  if (hasLoaded && filteredPosts.length === 0) {
    return <WarningMessage text="No posts found." />
  }

  return (
    <>
      <ul className={`${postList}`}>
        {displayedPosts.map((post) => (
          <li
            className={`${postList}__item`}
            key={post.id}
          >
            <PostCard
              post={post}
              actions={[
                ...(isAdmin
                  ? [
                    <div className={`${postList}__actions`}>
                      <DeleteButton
                        onClick={() => handleDelete(post.id)}
                      >
                        Delete
                      </DeleteButton>
                      <UpdateButton
                        to={routeMap.postEdit.navigate(post.id)}
                      >
                        Edit
                      </UpdateButton>
                    </div>
                  ]
                  : [])
              ]}
            />
          </li>
        ))}
      </ul>

      {error && (
        <p role="alert">{error}</p>
      )}
    </>

  );
}

export default PostList;



