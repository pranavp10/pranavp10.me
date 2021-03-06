/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'src/pages/*.js',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!src/pages/_*.js',
    '!src/pages/api',
    '!src/pages/404.js',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('src', '')
                  .replace('pages', '')
                  .replace('data', '')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('//', '/');
                const route = path === '/index' ? '' : path;
                return `
                        <url>
                            <loc>${`https://pranavp10.me${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();
