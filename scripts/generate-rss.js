const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'Lee Robinson',
    site_url: 'https://pranavp10.me/',
    feed_url: 'https://pranavp10.me/feed.xml',
  });

  const blog = await fs.readdir(path.join(__dirname, '..', 'data', 'blog'));
  const algorithm = await fs.readdir(path.join(__dirname, '..', 'data', 'algorithm'));
  const javascript = await fs.readdir(path.join(__dirname, '..', 'data', 'javascript'));
  const learning = await fs.readdir(path.join(__dirname, '..', 'data', 'learning'));

  await Promise.all(
    blog.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'data', 'blog', name));
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: `https://pranavp10.me/blog/${name.replace(/\.mdx?/, '')}`,
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    })
  );
  await Promise.all(
    algorithm.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'data', 'algorithm', name));
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: `https://pranavp10.me/algorithm/${name.replace(/\.mdx?/, '')}`,
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    })
  );
  await Promise.all(
    javascript.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'data', 'javascript', name));
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: `https://pranavp10.me/javascript/${name.replace(/\.mdx?/, '')}`,
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    })
  );
  await Promise.all(
    learning.map(async (name) => {
      const content = await fs.readFile(path.join(__dirname, '..', 'data', 'learning', name));
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: `https://pranavp10.me/learning/${name.replace(/\.mdx?/, '')}`,
        date: frontmatter.data.publishedAt,
        description: frontmatter.data.summary,
      });
    })
  );

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
