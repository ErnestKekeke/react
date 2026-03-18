// import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Food from "./components/Food"
//............
import Home from "./components/Home";
import About  from "./components/About"
import Contact from "./components/Contact"

// this is just a variable name used to store the path
import chickenFriedImage from "./assets/chicken-fried.png" 

function App() {
 
  return (
    <Router>

      <Header/>


      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Food/>
      <img width={100} src={chickenFriedImage} alt="chicken Fried Image" />
      <Footer/>
    </Router>
  )
}

export default App
