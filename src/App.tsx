import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ArticleList } from "./components/ArticleList";
import { ArticleDetail } from "./components/ArticleDetail";
import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <header className="bg-dark text-white text-center py-3 mb-4">
          <Link to="/" className="text-white text-decoration-none">
            <h1>Spaceflight News</h1>
          </Link>
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<ArticleList />} />

            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </div>

        <footer className="bg-dark text-white text-center py-3 mt-4 fixed-bottom">
          <p>© 2024 Spaceflight News- Romano Pietro</p>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
