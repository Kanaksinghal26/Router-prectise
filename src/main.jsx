import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/more">More</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/more" element={<More />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <div>
            <h1>I am in all pages</h1>
            <h1>Welcome to HOME page</h1>
        </div>
    );
}

function About() {
    return (
        <div>
            <h1>I am in all pages</h1>
            <h1>Get About Us</h1>
        </div>
    );
}

function More(){
    return (
        <div>
            <h1>
                I am more component.
            </h1>
        </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);  
