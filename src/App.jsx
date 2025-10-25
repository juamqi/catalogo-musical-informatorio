import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}