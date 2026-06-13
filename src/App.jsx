import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CRGHomePage from "./Pages/CRG HomePage/CRGHomePage";
import Contact from "./Pages/CRG ContactPage/Contact";
import Careers from "./Pages/CRG CareerPage/Careers";
import USITStaffing from "./Pages/CRG ServicesPage/USITStaffing";
import SoftwareDevelopment from "./Pages/CRG ServicesPage/SoftwareDevelopment";
import VideoConferencing from "./Pages/CRG ServicesPage/VideoConferencing";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <Router>
       <ScrollToTop /> 
      <div className="page-bg">
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
          <Route path="/us-it-staffing" element={<USITStaffing />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/video-conferencing" element={<VideoConferencing />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

          <Footer />
        </div>
      
    </Router>
  );
}

export default App;