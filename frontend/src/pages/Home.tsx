import BlogList from "../components/BlogList";
import Topics from "../components/Topics";

const Home = () => {
  return (
    <div className="max-w-screen flex">
      <div className="w-3/4 flex justify-center">
        <BlogList />
      </div>

      <div className="fixed right-0 top-16 w-1/4 h-screen border-l border-gray-200 bg-white overflow-y-auto">
        <div className="mt-5 px-3 flex justify-center">
          <Topics />
        </div>
      </div>
    </div>
  );
};

export default Home;
