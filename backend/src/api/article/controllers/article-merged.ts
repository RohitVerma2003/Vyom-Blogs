export default {
  async findOne(ctx) {
    const { id: documentId } = ctx.params;

    try {
      const articles: any[] = await strapi.db.query("api::article.article").findMany({
        where: { documentId },
        populate: ["cover", "category", "blocks", "author"],
      });

      const article = articles[0];

      if (!article) {
        return ctx.notFound("Article not found");
      }

      const authorDocumentId = article.author?.documentId;

      const author = authorDocumentId
        ? await strapi.db.query("api::author.author").findOne({
            where: { documentId: authorDocumentId },
          })
        : null;

      const files = await strapi.entityService.findMany("plugin::upload.file");

      const matchedFile = files.find((file) => {
        const withoutExt = file.name?.replace(/\.[^/.]+$/, "");
        const emailName = author?.email?.split(".")[0];
        const cleanAuthorName = author?.name?.replace(/\s+/g, "").toLowerCase();

        return (
          file.name === author?.email ||
          withoutExt === emailName ||
          withoutExt === cleanAuthorName
        );
      });

      const authorWithAvatar = author
        ? {
            ...author,
            avatar: matchedFile ? matchedFile.url : null,
          }
        : null;

      const result = {
        ...article,
        author: authorWithAvatar,
      };

      return { data: result };
    } catch (err) {
      console.error(err);
      ctx.throw(500, "Internal Server Error");
    }
  },
};
