import PropTypes from 'prop-types';
import { useState } from 'react';
import Container from '@/components/blog/layout';
import BlogPost from '@/components/blog/blogPost';
import { getAllFilesFrontMatter } from '@/components/blog/mdx';

const Blog = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((frontMatter) => frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="pt-32">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Blog
        </h1>
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
  posts: PropTypes.any,
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
