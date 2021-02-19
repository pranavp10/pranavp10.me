import hydrate from 'next-mdx-remote/hydrate';
import { getFiles, getFileBySlug } from '@/components/blog/mdx';
import BlogLayout from '@/components/blog/layout';
import MDXComponents from '@/components/blog/MDXComponents';
import PropTypes from 'prop-types';

const Learning = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
};

export async function getStaticPaths() {
  const posts = await getFiles('learning');

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
  const post = await getFileBySlug('learning', params.slug);
  return { props: post };
}
Learning.propTypes = {
  mdxSource: PropTypes.any,
  frontMatter: PropTypes.any,
};

export default Learning;
