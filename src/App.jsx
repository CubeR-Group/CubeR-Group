import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CRGHomePage from "./Pages/CRG HomePage/CRGHomePage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<CRGHomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;