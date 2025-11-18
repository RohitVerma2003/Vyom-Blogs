/**
 * article controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::article.article",
  ({ strapi }) => ({
    async find(ctx) {
      // 1. Get all articles with author + cover
      const articles: any = await strapi.db
        .query("api::article.article")
        .findMany({
          where: {
            publishedAt: { $notNull: true },
          },
          populate: ["cover", "author"],
        });

      // 2. Get all files (upload plugin)
      const files = await strapi.entityService.findMany("plugin::upload.file");

      // 3. Attach matched file URL to each article author
      const result = articles.map((article: any) => {
        const author = article.author;

        // Find a file where file.name matches author email or simplified author name
        const matchedFile = files.find((file) => {
          const fileNameWithoutExt = file.name?.replace(/\.[^/.]+$/, "");
          const emailName = author.email?.split(".")[0];
          const cleanAuthorName = author.name
            ?.replace(/\s+/g, "")
            .toLowerCase();

          return (
            file.name === author.email ||
            fileNameWithoutExt === emailName ||
            fileNameWithoutExt === cleanAuthorName
          );
        });

        return {
          ...article,
          author: {
            ...author,
            avatar: matchedFile ? matchedFile.url : null,
          },
        };
      });

      return { data: result };
    },
  })
);
