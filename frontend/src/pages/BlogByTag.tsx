import { useEffect, useState } from "react";
import { getArticlesByTag } from "../services/articles";
import { useParams } from "react-router-dom";
import TagBlock from "../components/TagBlock";
import Loader from "../components/Loader";

const BlogByTag = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      const data = await getArticlesByTag(slug);
      setArticles(data.data);
    };

    fetchData();
  }, []);

  if (!articles) return <Loader />;
  return (
    <div className="w-full">
      <p className="text-center font-bold text-4xl my-5">
        {slug?.toLocaleUpperCase()}
      </p>
      <div className="w-full flex justify-center">
        <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 justify-center">
          {articles?.map((article) => (
            <div className="my-6 flex justify-center" key={article?.id}>
              <TagBlock blog={article} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogByTag;
