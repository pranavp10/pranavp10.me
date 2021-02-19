import PropTypes from 'prop-types';
import BlogPost from '@/components/blog/blogPost';
import { getAllFilesFrontMatter } from '@/components/blog/mdx';

const Learning = ({ posts }) => {
  const filteredLearningPosts = posts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <div className="pt-32">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
        {filteredLearningPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </div>
  );
};

export default Learning;

Learning.propTypes = {
  posts: PropTypes.any,
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('learning');

  return { props: { posts } };
}
