import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import PropTypes from 'prop-types';

const BlogPost = ({ title, summary, slug, publishedAt }) => (
  <Link href={`/${slug}`}>
    <article className="flex items-center py-4 border-b border-gray-200 cursor-pointer w-full">
      <div>
        <header>
          <h2 className="text-lg md:text-xl font-semibold mb-2 w-full">{title}</h2>
        </header>
        <div className="text-gray-600 dark:text-gray-400">{summary}</div>
        <footer className="text-sm">
          <div className="flex items-center">
            <span className="text-gray-600">{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</span>
          </div>
        </footer>
      </div>
    </article>
  </Link>
);

BlogPost.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  slug: PropTypes.string,
  publishedAt: PropTypes.string,
};
export default BlogPost;
