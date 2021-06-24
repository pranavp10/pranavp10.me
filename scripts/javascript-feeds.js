const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');

async function generate() {
  const feed = new RSS({
    title: 'Pranav Patel',
    site_url: 'https://pranavp10.me',
    feed_url: 'https://pranavp10.me/javascript.xml',
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'javascript'));

  await Promise.all(
    posts.map(async (name) => {
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

  await fs.writeFile('./public/javascript.xml', feed.xml({ indent: true }));
}

generate();
