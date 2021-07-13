import { SEO, Hero } from '@/components/utils';
import { Why, OS, Terminal, Editor, Notion, Who } from '@/components/devenv';

const DevEnv = () => (
  <>
    <SEO
      BaseTitle="Developers environment - Pranav P"
      description="It will help you setup the Development environment which will keep the personal and Development Directory different so that you can work fearlessly"
      imageUrl="https://pranavp10.me/static/devenv.png"
      slug="/devenv"
    />
    <Hero
      title="Development .env setup"
      description="Increase the Development Productivity by 10x"
      color="#bfbfbf"
    />
    <Why />
    <OS />
    <Terminal />
    <Editor />
    <Notion />
    <Who />
  </>
);
export default DevEnv;
