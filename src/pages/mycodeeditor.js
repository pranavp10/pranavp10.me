import { Hero, SEO } from '@/components/utils';
import { Extension, Settings, Gist, Who } from '@/components/mycodeeditor';

const MyCodeEditor = () => (
  <>
    <SEO
      BaseTitle="My Code Editor - Pranav P"
      description="A code editor for Frontend development that improves your efficiency."
      imageUrl="https://pranavp10.me/static/mycodeeditor.png"
      slug="/mycodeeditor"
    />
    <Hero
      title="My Code Editor"
      description="Edit Code like a Pro Frontend developer. A code editor for Frontend development that improves your
            efficiency."
      button={{ name: 'Download', href: `https://code.visualstudio.com/download` }}
      color="#91a7ef"
    />
    <Extension />
    <Settings />
    <Gist />
    <Who />
  </>
);
export default MyCodeEditor;
