import { Post, PostFilter } from "./post-types";

function filterPosts(posts: Post[], category: PostFilter): Post[] {

  const filteredPosts =
    category === 'all'
      ? posts
      : posts.filter(
        (post) => post.category === category
      )

  return filteredPosts
}

export default filterPosts