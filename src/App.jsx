import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <BrowserRouter >
        <nav>
            <h1>Vanlife</h1>
            <Link to="/"> Home </Link>
            <Link to="/about"> About </Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    </BrowserRouter>
  )
}

function Home(){
    return (
        <>
            <h1>You got the travel plans, we got the travel Vans</h1>
            <h3>Add an adventure to your life by joining the #Vanlife movement.</h3>
            <div><button>Find your Van</button></div>
            <div>@2022 #Vanlife</div>
        </>
    )
}

function About(){
    return (
        <>
            <h2>Don't squueze in a sedan when you could relax in a van.</h2>
            <h4>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus similique commodi itaque necessitatibus. Eum nam quos repellat facere ducimus.</h4>
        </>
    )
}
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);