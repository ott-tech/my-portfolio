import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { ScrollToTop } from "./components/scrollToTop";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App