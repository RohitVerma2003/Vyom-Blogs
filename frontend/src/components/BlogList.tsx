import { useEffect, useState } from "react";
import Blog from "./Blog";
import Loader from "./Loader";

const BlogList = () => {
  const [blogs, setBlogs] = useState<any[]>([]);

  const fetchBlogs = async () => {
    try {
      const data = await fetch("http://localhost:1337/api/articles-with-authors");
      const response = await data.json();

      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if(!blogs) return <Loader/>

  return (
    <div className="px-5 md:w-5/7 md:my-10">
      {blogs.map((blog) => (
        <div className="my-6" key={blog?.id}>
          <Blog blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
