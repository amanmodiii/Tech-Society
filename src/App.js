import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Events from "./pages/events/Events";
import Faq from "./pages/faq/Faq"
import GalleryPage from "./pages/gallery/GalleryPage"
import Team from "./pages/team/Team"
import { InfinitySpin } from "react-loader-spinner";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);
  return (
    <BrowserRouter>
      <div
        className={`App ${
          loading &&
          "min-w-screen min-h-screen flex justify-center items-center"
        } bg-[#0c0a0a]`}
      >
        {loading ? (
          <InfinitySpin width="200" color="white" />
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/events" element={<Events />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
