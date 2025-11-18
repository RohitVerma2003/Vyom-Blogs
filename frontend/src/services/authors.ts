import axios from "axios";

export const getAllAuthors = async () => {
  try {
    const res = await axios.get("http://localhost:1337/api/authors", {
      params: { populate: "*" },
    });
    const data = await res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
