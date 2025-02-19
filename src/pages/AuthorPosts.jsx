import { useState } from "react";
import { DummyPosts } from "../data/data";

import PostItem from "../components/PostItem";

export default function AuthorPosts() {
  const [posts, setPosts] = useState(DummyPosts);
  return (
    <section className="authorPosts">
      <h1 className="Page-title">Author Posts</h1>
      { posts.length > 0 ?
      <div className="container authorPosts-container">
        {posts.map(({ id, Image, authorId, category, title, des }) => (
          <PostItem key={id} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id} />
        ))}
      </div> : <h2 className="error-center">No Posts Found</h2>
      }
    </section>
  )
}
