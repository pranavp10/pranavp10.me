import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import PropTypes from 'prop-types';

const BlogPost = ({ title, summary, slug, publishedAt }) => (
  <Link href={`/learning/${slug}`}>
    <div className="mt-6">
      <div className="px-10 py-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center">
          <span className="font-light text-gray-600">
            {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
          </span>
          <a
            href="#"
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">
            Laravel
          </a>
        </div>
        <div className="mt-2">
          <a href="#" className="text-2xl text-gray-700 font-bold hover:underline">
            {title}
          </a>
          <p className="mt-2 text-gray-600">{summary}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Read more
          </a>
          <div>
            <a href="#" className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              />
              <h1 className="text-gray-700 font-bold hover:underline">Alex John</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

BlogPost.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  slug: PropTypes.string,
  publishedAt: PropTypes.string,
};
export default BlogPost;
