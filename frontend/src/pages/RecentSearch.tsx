import { LucideX } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RecentSearch = () => {
  const [search, setSearch] = useState<string>("");
  const [recent, setRecent] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimSearch = search.trim();

    if (trimSearch.length > 0) {
      const newData = recent.filter((item) => item !== trimSearch);
      newData.unshift(trimSearch);

      localStorage.setItem("recent_searches", JSON.stringify(newData));
      navigate(`/search/${trimSearch}`);
    }
  };

  const handleRemove = (value: string) => {
    const newData = recent.filter((item) => item !== value);
    localStorage.setItem("recent_searches", JSON.stringify(newData));
    setRecent(newData);
  };

  useEffect(() => {
    const recent_searches = localStorage.getItem("recent_searches");
    const data: string[] = recent_searches ? JSON.parse(recent_searches) : [];
    setRecent(data);
  }, []);

  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-4/5">
        <form onSubmit={handleSubmit} className="w-full inline-block md:hidden">
          <input
            type="text"
            className="w-full border-1 border-gray-300 rounded-full h-10 outline-none p-3 font-light text-sm"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <p className="font-bold text-4xl my-5">Recent Searches</p>

        <div className="flex flex-col gap-3">
          {recent.map((ele, index) => (
            <div className="p-4 py-3 bg-gray-200 rounded-full flex justify-between items-center" key={index}>
              <p>{ele}</p>
              <button onClick={() => handleRemove(ele)} className="cursor-pointer">
                <LucideX />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentSearch;
