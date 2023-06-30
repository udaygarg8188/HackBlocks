import React from "react";
import "./App.css";
import About from "./components/About/about";
import Footer from "./components/footer/footer";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/Navbar";
import Theme from "./components/ProblemStatement/Theme";
import Prize from "./components/Prizes/Prize";
import Scheduled from "./components/Schedule/Schedule";
import Faq from "./components/Faq/Faq";
import Venue from "./components/Venue/Venue";
import Gallery from "./components/Gallery/Gallery";
import Sponser from "./components/sponsored/sponsored";
import Judges from "./components/Judges/judges";


function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <About/>
            <Theme/>
            <Scheduled/>
            <Prize/>
            <Judges/>
            <Gallery/>
            <Sponser/>
            <Faq/>
            <Venue/>
            <Footer/>
        </div>
    );
}

export default App;
