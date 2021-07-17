import { IndexHero, SEO, NewsLetter } from '@/components/utils';
import { Timeline } from '@/components/timeline';
import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {
  const { user, error } = useUser();

  return (
    <>
      <SEO />
      <IndexHero />
      <Timeline />
      {/* <NewsLetter /> */}
    </>
  );
}
