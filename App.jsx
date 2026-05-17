import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>Zoha Beauty Salon</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/services">Services</Link>

          <Link to="/gallery">Gallery</Link>

          <Link to="/booking">Booking</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
