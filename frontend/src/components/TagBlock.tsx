import { Link } from "react-router-dom";

const TagBlock = ({ blog }: { blog: any }) => {
  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const monthShort = date.toLocaleString("en-US", { month: "short" });
    const day = String(date.getUTCDate()).padStart(2, "0");

    return `${monthShort} ${day}`;
  }
  
  return (
    <div className="w-4/5 border-b-1 border-gray-300 md:border-0">
      <img
        src={`http://localhost:1337${blog?.cover?.formats?.large?.url || blog?.cover?.formats?.medium?.url}`}
        alt="..."
        className="w-full"
      />

      <div className="my-2">
        <Link to={`/authors/${blog?.author?.documentId}`}>
          <p className="text-sm font-light">
            By <span className="hover:underline">{blog?.author?.name}</span>
          </p>
        </Link>
        <Link to={`/articles/${blog?.documentId}`}>
          <p className="text-2xl font-bold">{blog?.title}</p>
        </Link>
        <p className="text-base font-light text-gray-500">
          {blog?.description}
        </p>
        <span className="text-sm font-light text-gray-500">
          {formatDate(blog.updatedAt)}
        </span>
      </div>
    </div>
  );
};

export default TagBlock;
