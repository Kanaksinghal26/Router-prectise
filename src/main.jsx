import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />);  
