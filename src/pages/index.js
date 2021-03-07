import { Hero, SEO, NewsLetter } from '@/components/utils';
import { Timeline } from '@/components/timeline';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <Timeline />
      <NewsLetter />
    </>
  );
}
