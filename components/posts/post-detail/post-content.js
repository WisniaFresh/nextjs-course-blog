import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus";
import jsLang from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import cssLang from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import jsxLang from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("js", jsLang);
SyntaxHighlighter.registerLanguage("css", cssLang);
SyntaxHighlighter.registerLanguage("jsx", jsxLang);

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponents = {
    img(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      } else {
        return <p>{paragraph.children}</p>;
      }
    },
    code(code) {
      const language = code.className?.split("language-")[1];
      return (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={language}
          children={code.children}
          showLineNumbers
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customComponents} remarkPlugins={[remarkGfm]}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export default PostContent;
