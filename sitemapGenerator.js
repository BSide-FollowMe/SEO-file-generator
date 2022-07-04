const { getAllPlantIds, getAllQuestionIds } = require('./api');
const fs = require('fs');

const generatePaths = async () => {
  // const [plants, questions] = await axios.all(getAllPlantIds(), getAllQuestionIds);
  const plants = await getAllPlantIds();
  const questions = await getAllQuestionIds();
  const plantBookmarks = plants.map((id) => {
    return `/plant/${id}`;
  });
  const questionBookmarks = questions.map((id) => {
    return `/qna/detail/${id}`;
  });
  return ['', '/home', '/plants', ...plantBookmarks, ...questionBookmarks];
};

exports.generateSitemap = async () => {
  fs.rmdir('public', () => {});
  fs.mkdir('public', { recursive: true }, (err) => {
    if (err) console.log(err);
  });
  const bookmarks = await generatePaths();
  fs.appendFile(
    'public/sitemap.xml',
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">${bookmarks
      .map(
        (bookmark) => `
  <url>
    <loc>https://www.plantslang.com${bookmark}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
      )
      .join('')}
</urlset>
  `,
    function () {}
  );
};
