import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import Topics from "../components/Topics";
import { getAllAuthors } from "../services/authors";
import { Link } from "react-router-dom";

const AuthorsCompo = ({ authors }: { authors: any }) => {
  return (
    <div className="w-4/5">
      <div className="font-base text-md mb-3 border-b-1 border-gray-200 pb-2">
        The Authors
      </div>
      {authors?.map((author: any) => (
        <div className="w-full flex justify-center mb-4" key={author?.id}>
          <div className="w-full flex items-center gap-3">
            <img
              src={`http://localhost:1337${author?.avatar?.url}`}
              alt="..."
              className="min-w-10 min-h-10 max-w-10 max-h-10 rounded-full object-contain border-1 border-gray-400"
            />
            <div>
              <Link to={`/authors/${author?.documentId}`}>
                <p className="text-base font-bold">{author?.name}</p>
              </Link>
              <p className="text-sm font-light">{author?.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => {
  const [authors, setAuthors] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllAuthors();
      setAuthors(data.data);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-screen flex">
      <div className="w-full md:w-3/4 flex justify-center">
        <BlogList />
      </div>

      <div className="fixed right-0 top-16 w-1/4 h-screen border-l border-gray-200 bg-white overflow-y-auto hidden md:inline-block">
        <div className="my-5 px-3 flex justify-center">
          <Topics />
        </div>
        <div className="my-5 px-3 flex flex-col items-center">
          <AuthorsCompo authors={authors} />
        </div>
      </div>
    </div>
  );
};

export default Home;
