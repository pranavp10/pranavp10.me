import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

const SEO = ({
  BaseTitle = `Pranav | JavaScript, React, Design Systems.`,
  description = `I'm a frontend developer, technical writer, motivation speaker. Building Quze which is going to effect millions of students`,
  imageUrl = 'https://pranavp10.me/static/portfolio.png',
  slug,
}) => {
  const title = BaseTitle;
  const baseUrl = 'https://pranavp10.me';
  const url = slug ? `${baseUrl}${slug}` : baseUrl;
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title: `${title}`,
        description: `${description}`,
        images: [{ url: imageUrl }],
      }}
    />
  );
};
SEO.propTypes = {
  BaseTitle: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  slug: PropTypes.string,
};
export default SEO;
