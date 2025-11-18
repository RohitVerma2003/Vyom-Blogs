import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAuthor } from "../services/authors";
import Blog from "../components/Blog";

const Author = () => {
  const [author, setAuthor] = useState<any>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await getAuthor(id);
      setAuthor(data.data);
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-screen flex">
      <div className="w-full md:w-3/4 flex justify-center">
        <div className="w-6/7 md:w-5/7 my-10">
          <div className="my-5 px-3 flex flex-col items-center gap-3 inline-block md:hidden">
            <img
              src={`http://localhost:1337${author?.avatar?.formats?.thumbnail?.url}`}
              alt="..."
              className="max-w-20 max-h-20 min-w-20 min-h-20 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-xl text-center">
                {author?.name}
              </p>
              <p className="text-center text-gray-400">{author?.email}</p>
            </div>
          </div>
          <div className="text-3xl font-bold border-b border-gray-200 pb-3 hidden md:inline-block">
            {author?.name}
          </div>
          {author &&
            author?.articles?.map((article: any) => (
              <div className="my-6" key={article?.id}>
                <Blog blog={article} />
              </div>
            ))}
        </div>
      </div>

      <div className="fixed right-0 top-16 w-1/4 h-screen border-l border-gray-200 bg-white overflow-y-auto hidden md:inline-block">
        <div className="my-5 px-3 flex flex-col items-center gap-3">
          <img
            src={`http://localhost:1337${author?.avatar?.formats?.thumbnail?.url}`}
            alt="..."
            className="max-w-20 max-h-20 min-w-20 min-h-20 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-xl text-center">{author?.name}</p>
            <p className="text-center text-gray-400">{author?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
