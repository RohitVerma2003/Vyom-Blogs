import Navbar from "./components/Navbar"
import BlogPage from "./pages/BlogPage"
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="max-w-screen">
      <Navbar/>

      <Home/>
      {/* <BlogPage/> */}
    </div>
  )
}

export default App
