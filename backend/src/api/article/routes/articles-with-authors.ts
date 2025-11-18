export default {
  routes: [
    {
      method: "GET",
      path: "/articles-with-authors",
      handler: "articles-with-authors.find",
      config: {
        auth: false, 
      },
    },
  ],
};
