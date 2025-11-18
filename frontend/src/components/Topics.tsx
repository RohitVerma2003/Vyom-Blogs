import { useEffect, useState } from "react";
import { getCategories } from "../services/articles";

const Topics = () => {
  const [topics, setTopics] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      setTopics(data.data);
    };

    fetchData();
  }, []);
  return (
    <div className="w-4/5">
      <div className="font-base text-md mb-3 border-b-1 border-gray-200 pb-2">
        Recommended Topics
      </div>
      <div className="flex flex-wrap gap-3">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="text-sm font-light bg-gray-200 p-2 px-3 rounded-full cursor-pointer"
          >
            {topic.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Topics;
