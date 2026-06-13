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
<<<<<<< HEAD
        <Navbar />

        <Routes>
          <Route path="/" element={<CRGHomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/about"
            element={
              <div>
                <h1>About Us</h1>
                <p>This is the about page.</p>
              </div>
            }
          />
          <Route path="/services" element={<CRGServicesPage />} />

          <Route path="/careers" element={<Careers />} />
        </Routes>

        <Footer />
=======
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
>>>>>>> c505ab4 (bg)
      </div>
    </Router>
  );
}

export default App;