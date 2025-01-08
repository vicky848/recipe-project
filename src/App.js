import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Footer from './component/Footer';
import Header from './component/Header';
import Service from './component/Service';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;