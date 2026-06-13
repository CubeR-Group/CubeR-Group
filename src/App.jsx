import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CRGHomePage from "./Pages/CRG HomePage/CRGHomePage";
import Contact from "./Pages/CRG ContactPage/Contact";
import Careers from "./Pages/CRG CareerPage/Careers";
import CRGServicesPage from "./Pages/CRG ServicesPage/CRGServicesPage";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="page-bg">
        <div className="page-content">
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={<CRGHomePage />}
            />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;