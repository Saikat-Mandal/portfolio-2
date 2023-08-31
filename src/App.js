import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="main-app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route eexact path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route exact path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
