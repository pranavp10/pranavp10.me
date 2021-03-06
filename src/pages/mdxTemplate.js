const MDXTemplate = () => (
  <div className="pt-32">
    <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
      <div className="max-w-3xl pb-8 md:pb-16 text-center md:text-left">
        <h1 className="text-5xl font-black">Template</h1>
        <p className="text-gray-600 dark:text-gray-100 my-4">
          To create a tamplate for the mdx file here is the example to create a blog using the mxd
          file
        </p>
        <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-4">
          <p>title: 'title will come'</p>
          <p>date: '2021-01-12(yyyy-mm-dd)'</p>
          <p>lastmod: 2021-01-12(yyyy-mm-dd)</p>
          <p>tags: ['tag1', 'tag2', 'tag3']</p>
          <p>draft: false</p>
          <p>summary: 'short description will be here'</p>
          <p>images: ['image url2', 'image url2']</p>
        </div>
      </div>
    </div>
  </div>
);
export default MDXTemplate;
