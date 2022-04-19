import "./App.css";
import Home from "./pages/Home/Home";
import CreatePage from "./pages/CreatePage/CreatePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Favorites from "./pages/Favorites/Favorites";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {/* Apparently, Switch was replaced by Routes in react-router-dom v6. TIL */}
      <Routes>
        <Route path="/create" element={<CreatePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
