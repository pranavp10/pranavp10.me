import PropTypes from 'prop-types';
import BlogPost from '@/components/blog/blogPost';
import { getAllFilesFrontMatter } from '@/components/blog/mdx';
import { useState } from 'react';
import { SEO } from '@/components/utils';

const Blog = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <SEO
        BaseTitle="My Learning Book | Pranav"
        slug="/learning"
        description=" Welcome to my learning book. You will find all my learning documentation here, revise
              every thing and started understanding"
      />
      <div className="pt-32">
        <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
          <div className="max-w-3xl pb-8 md:pb-16 text-center md:text-left">
            <h1 className="text-5xl font-black">My Learning Book</h1>
            <p className="text-gray-600 dark:text-gray-100 my-4">
              Welcome to my learning book. You will find all my learning documentation here, revise
              every thing and started understanding
            </p>
            <div className="relative w-full">
              <input
                aria-label="Search Learning Resource"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Learning Resource"
                className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
              />
              <svg
                className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          {filteredBlogPosts.map((frontMatter) => (
            <BlogPost
              key={frontMatter.title}
              {...frontMatter}
              slug={`learning/${frontMatter.slug}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;

Blog.propTypes = {
  posts: PropTypes.any,
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('learning');

  return { props: { posts } };
}
