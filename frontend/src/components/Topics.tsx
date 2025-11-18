const Topics = () => {
  const topics: string[] = [
    "Self improvement",
    "Machine Learning",
    "Writing",
    "Relationships",
    "Politics",
  ];
  return (
    <div className="w-4/5">
      <div className="font-base text-md mb-3 border-b-1 border-gray-200 pb-2">Recommended Topics</div>
      <div className="flex flex-wrap gap-3">
        {topics.map((topic, index) => (
          <button
            key={index}
            className="text-sm font-light bg-gray-200 p-2 px-3 rounded-full cursor-pointer"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Topics;
