import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Tag from './tag';

const BlogPost = ({ title, summary, slug, publishedAt, tags }) => (
  <li key={slug} className="py-4 list-none">
    <article className="space-y-2">
      <div className="space-y-1">
        <div>
          <h3 className="text-2xl font-bold leading-8 text-gray-900 dark:text-gray-100">
            <Link href={`/${slug}`} className="">
              {title}
            </Link>
          </h3>
          {/* <div className="flex flex-wrap">
            {tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div> */}
        </div>
        <div className="text-gray-600 dark:text-gray-100 mt-4 line-clamp-2">{summary}</div>
        <dl>
          <dt className="sr-only">Published on</dt>
          <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={publishedAt}>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</time>
          </dd>
        </dl>
      </div>
    </article>
  </li>
);

BlogPost.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  slug: PropTypes.string,
  publishedAt: PropTypes.string,
  tags: PropTypes.array,
};
export default BlogPost;
