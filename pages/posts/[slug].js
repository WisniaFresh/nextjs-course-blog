import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

function PostDetailPage({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content={`Blog post about ${post.title} - ${post.excerpt}`}
        />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600, // each 10 min
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const allSlugs = postFileNames.map((name) => name.replace(/\.md$/, ""));

  return {
    paths: allSlugs.map((slug) => {
      return {
        params: {
          slug: slug,
        },
      };
    }),
    fallback: false, // because I will prepare paths for all posts
  };
}

export default PostDetailPage;
