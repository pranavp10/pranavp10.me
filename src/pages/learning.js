import PropTypes from 'prop-types';
import BlogPost from '@/components/blog/blogPost';
import { getAllFilesFrontMatter } from '@/components/blog/mdx';

const Blog = ({ posts }) => {
  const filteredBlogPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <div className="pt-32">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <div className="max-w-3xl pb-8 md:pb-16 text-center md:text-left">
          <h1 className="text-5xl font-black">My Learning Book</h1>
          <p className="text-gray-600 dark:text-gray-100 mt-4">
            Welcome to my learning book. You will find all my learning documentation here, revise
            every thing and started understanding
          </p>
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
