const BlogPage = () => {
  const topics: string[] = [
    "Self improvement",
    "Machine Learning",
    "Writing",
    "Relationships",
    "Politics",
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-1/2">
        <header className="mb-6 pt-12 pb-4 border-b-1 border-gray-300">
          <p className="text-4xl font-bold">
            Partner Program update: Starting October 1, we’re rewarding external
            traffic
          </p>
          <p className="text-gray-500 text-xl leading-6 my-3">
            The start of a series of small-scale changes to make the Medium
            Partner Program a better fit for more writers
          </p>
          <div className="my-4 flex items-center gap-4">
            <img
              src="https://miro.medium.com/v2/resize:fill:88:88/1*_BorRAHo8o40sBLbZ7VE3Q.jpeg"
              alt="..."
              className="max-w-10 rounded-full"
            />
            <p className="text-sm font-light">Alberto Romero</p>
            <p className="text-sm font-light text-gray-500">Oct 1, 2025</p>
          </div>
        </header>

        <main className="font-light text-lg border-b-1 border-gray-300 pb-4 mb-10">
          <div className="mb-8">
            Today we’re announcing that we are going to start making small
            changes to the Medium Partner Program on a monthly basis for the
            next six months, and announce them at the beginning of the month.
          </div>
          <div className="mb-8">
            This first change rewards paywalled stories that are shared on
            social media, attract search traffic, and/or are shared directly
            with people outside of Medium. The change shifts 5% of the payouts
            toward stories that get this external traffic and especially to
            external traffic that converts to members.
          </div>
          <div className="mb-8">
            We’ve often been asked: Why doesn’t the Partner Program pay for
            external traffic? Sharing on social media, getting referral traffic
            from search and direct sharing are all behaviors we want to reward,
            which is why our first change is adding an incentive to the Partner
            Program that rewards you when you share your writing externally and
            bring in brand new readers.
          </div>
          <div className="flex gap-3 flex-wrap mb-10">
            {topics.map((topic, index) => (
              <button
                key={index}
                className="text-sm font-light bg-gray-200 p-2 px-3 rounded-full cursor-pointer"
              >
                {topic}
              </button>
            ))}
          </div>
          <div className="my-4 flex items-center gap-4">
            <img
              src="https://miro.medium.com/v2/resize:fill:88:88/1*_BorRAHo8o40sBLbZ7VE3Q.jpeg"
              alt="..."
              className="max-w-16 rounded-full"
            />
            <div>
              <p className="text-xl font-semibold">Written By Alberto Romero</p>
              <div className="flex items-center text-sm text-gray-500 gap-3">
                <span>50K followers</span>
                <span>.</span>
                <span>137 following</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BlogPage;
