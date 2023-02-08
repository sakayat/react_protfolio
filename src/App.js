import React, { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Social from "./components/Social";
import CustomCurser from "./components/CustomCurser";
import { useCustomCursor } from "./hooks/useCustomCursor";

const App = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  useSmoothScroll();
  useCustomCursor(outerRef, innerRef);
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <CustomCurser outerRef={outerRef} innerRef={innerRef} />
        <Social />
        <div className="noise"></div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Navbar footerName />
        <Footer />
      </div>
    </>
  );
};

export default App;
