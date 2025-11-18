export default {
  routes: [
    {
      method: "GET",
      path: "/article-merged/:id",
      handler: "article-merged.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
