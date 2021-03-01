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
        <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 className="text-5xl font-black">Blog</h1>
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
