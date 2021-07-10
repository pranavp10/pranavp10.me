import { SEO } from '@/components/utils';
import { Hero, Libraries, Why, Who } from '@/components/libraries';

const LibrariesPage = () => (
  <>
    <SEO
      BaseTitle="Frontend Libraries - Pranav P"
      description="Best Frontend Libraries which are used by professionals working at facebook, Google, Microsoft and many other top companies."
      imageUrl="https://pranavp10.me/static/libraries.png"
      slug="/libraries"
    />
    <Hero />
    <Why />
    <Libraries />
    <Who />
  </>
);
export default LibrariesPage;
