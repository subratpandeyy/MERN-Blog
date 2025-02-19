import { DummyPosts } from "../data/data";

// Import useState
import { useState } from "react";

// Import components
import PostItem from "./PostItem";

export default function Posts() {
  const [posts, setPosts] = useState(DummyPosts);

  return (
    <section className="posts">
      { posts.length > 0 ?
      <div className="container posts-container">
        {posts.map(({ id, Image, authorId, category, title, des }) => (
          <PostItem key={id} Image={Image} category={category} authorId={authorId} title={title} des={des} postId={id} />
        ))}
      </div> : <h2 className="error-center">No Posts Found</h2>
      }
    </section>
  );
}
