import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
            <div className="noise"></div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
            </div>
        </>
    );
};

export default App;
