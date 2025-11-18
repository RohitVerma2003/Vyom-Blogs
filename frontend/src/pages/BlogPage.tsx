import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPartcularArticle } from "../services/articles";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import Loader from "../components/Loader";

const BlogPage = () => {
  const [article, setArticle] = useState<any>();
  const { id } = useParams<{ id: string }>();

  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const monthShort = date.toLocaleString("en-US", { month: "short" });
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${monthShort} ${day}`;
  }

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await getPartcularArticle(id);
      setArticle(data.data);
    };

    fetchData();
  }, []);

  console.log(article);

  if (!article) return <Loader />;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full px-5 md:px-0 md:w-1/2">
        <header className="mb-6 pt-12 pb-4 border-b-1 border-gray-300">
          <p className="text-4xl font-bold">{article.title}</p>
          <p className="text-gray-500 text-xl leading-6 my-3">
            {article.description}
          </p>
          <div className="my-4 flex items-center gap-4">
            <img
              src={`http://localhost:1337${article?.author?.avatar}`}
              alt="..."
              className="max-w-10 max-h-10 min-w-10 min-h-10 rounded-full border-1 border-gray-500 object-contain"
            />
            <Link to={`/authors/${article?.author?.documentId}`}>
              <p className="text-sm font-light hover:underline">
                {article?.author?.name}
              </p>
            </Link>
            <p className="text-sm font-light text-gray-500">
              {formatDate(article?.updatedAt)}
            </p>
          </div>
        </header>

        <main className="font-light text-lg border-b-1 border-gray-300 pb-4 mb-10">
          {article?.cover?.url && (
            <img
              src={`http://localhost:1337${article?.cover?.url}`}
              className="max-w-80 md:max-w-150 mb-8 mx-auto"
            />
          )}

          {article?.blocks?.map((block: any) => {
            if (block?.__component === "shared.rich-text") {
              return (
                <div className="mb-8" key={block?.id}>
                  <ReactMarkDown remarkPlugins={[remarkGfm]}>
                    {block?.body}
                  </ReactMarkDown>
                </div>
              );
            }
          })}
          <div className="flex gap-3 flex-wrap mb-10">
            <button className="text-sm font-light bg-gray-200 p-2 px-3 rounded-full cursor-pointer">
              {article?.category?.name}
            </button>
          </div>
          <div className="my-4 flex items-center gap-4">
            <img
              src={`http://localhost:1337${article?.author?.avatar}`}
              alt="..."
              className="max-w-16 max-h-16 min-w-16 min-h-16 rounded-full border-1 border-gray-400 object-contain"
            />
            <div>
              <Link to={`/authors/${article?.author?.documentId}`}>
                <p className="text-xl font-semibold">
                  Written By{" "}
                  <span className="hover:underline">
                    {article?.author?.name}
                  </span>
                </p>
              </Link>
              <div className="flex items-center text-sm text-gray-500 gap-3">
                <span>{article?.author?.email}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
