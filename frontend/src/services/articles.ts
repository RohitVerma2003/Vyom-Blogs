import axios from "axios";

export const getPartcularArticle = async (id: string) => {
  try {
    const res = await axios.get(
      `http://localhost:1337/api/article-merged/${id}`
    );
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const res = await axios.get(`http://localhost:1337/api/categories`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getArticlesByTag = async (slug: string) => {
  try {
    const res = await axios.get(`http://localhost:1337/api/articles`, {
      params: {
        filters: {
          category: {
            slug: {
              $eq: slug,
            },
          },
        },
        populate: "*",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
