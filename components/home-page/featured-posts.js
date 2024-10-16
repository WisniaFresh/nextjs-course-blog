import classes from "./featured-posts.module.css";
import PostGrid from "../posts/posts-grid";

function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
