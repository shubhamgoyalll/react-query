import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import PostsTraditional from "./components/PostsTraditional";
import PostsRQ from "./components/PostsRQ";

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Traditional Posts</Link>
            </li>
            <li>
              <Link to="/rq-posts">React Query Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/posts" element={<PostsTraditional />} />
          <Route exact path="/rq-posts" element={<PostsRQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
