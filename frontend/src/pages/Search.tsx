import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesBySearch } from "../services/articles";
import TagBlock from "../components/TagBlock";
import Loader from "../components/Loader";

const Search = () => {
  const { slug } = useParams<{ slug: string }>();
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      const data = await getArticlesBySearch(slug);
      setArticles(data.data);
    };

    fetchData();
  }, []);

  if (!articles) return <Loader />;

  return (
    <div className="w-full">
      <p className="text-center font-bold text-4xl my-5">
        <span className="text-gray-400">Results for </span>
        {slug}
      </p>
      {articles.length > 0 ? (
        <div className="w-full flex justify-center">
          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 justify-center">
            {articles?.map((article) => (
              <div className="my-6 flex justify-center" key={article?.id}>
                <TagBlock blog={article} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center text-4xl mt-10">No results found</div>
      )}
    </div>
  );
};

export default Search;
