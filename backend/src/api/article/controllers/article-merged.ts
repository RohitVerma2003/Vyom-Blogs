export default {
  async findOne(ctx) {
    const { id: documentId } = ctx.params; // this is the article.documentId

    try {
      // 1. Fetch the article by documentId
      const articles: any[] = await strapi.db.query("api::article.article").findMany({
        where: { documentId },
        populate: ["cover", "category", "blocks", "author"],
      });

      const article = articles[0];

      if (!article) {
        return ctx.notFound("Article not found");
      }

      // 2. Extract author.documentId
      const authorDocumentId = article.author?.documentId;

      // 3. Fetch the author object from author table
      const author = authorDocumentId
        ? await strapi.db.query("api::author.author").findOne({
            where: { documentId: authorDocumentId },
          })
        : null;

      // 4. Fetch all files from upload plugin
      const files = await strapi.entityService.findMany("plugin::upload.file");

      // 5. Match file to author using: email, name, filename without extension
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

      // 6. Attach avatar to author
      const authorWithAvatar = author
        ? {
            ...author,
            avatar: matchedFile ? matchedFile.url : null,
          }
        : null;

      // 7. Merge everything
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
