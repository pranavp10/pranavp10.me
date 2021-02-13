import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '@/components/blog/mdx';
import BlogLayout from '@/components/blog/layout';
import MDXComponents from '@/components/blog/MDXComponents';
import PropTypes from 'prop-types';

const Blog = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
};

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
  return { props: post };
}
Blog.propTypes = {
  mdxSource: PropTypes.any,
  frontMatter: PropTypes.any,
};

export default Blog;
