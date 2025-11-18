import { Link } from "react-router-dom";

const Blog = ({ blog }: { blog: any }) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const monthShort = date.toLocaleString("en-US", { month: "short" });
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${monthShort} ${day}`;
  }

  return (
    <div className="flex items-center justify-between border-b-1 border-gray-200 py-5 gap-6">
      <div className="">
        {blog?.author && (
          <div className="mb-4 flex items-center gap-3">
            <img
              src={`http://localhost:1337${blog?.author?.avatar}`}
              alt="..."
              className="max-w-6 rounded-full object-cover"
            />
            <Link to={`/authors/${blog?.author?.documentId}`}>
              <p className="text-sm font-light hover:underline">{blog?.author?.name}</p>
            </Link>
          </div>
        )}
        <Link to={`/articles/${blog?.documentId}`}>
          <p className="text-2xl font-bold mb-1">{blog.title}</p>
        </Link>
        <p className="text-gray-600">{blog.description}</p>
        <div className="mt-3">
          <span className="text-sm font-light text-gray-500">
            {formatDate(blog.updatedAt)}
          </span>
        </div>
      </div>
      {blog.cover && (
        <div className="max-w-40 border-1 border-gray-200">
          <img
            src={`http://localhost:1337${blog?.cover?.formats?.thumbnail?.url}`}
            alt="..."
          />
        </div>
      )}
    </div>
  );
};

export default Blog;
