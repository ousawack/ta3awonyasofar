import Header from "./components/Header.js";
import Footer from "./components/Footer";
import Cart from "./components/Cart.js";
import Cooperatives from "./components/Cooperatives.js";
import Vitrine from "./pages/Vitrine.js";
import "./App.css";
import LandingPage from "./pages/LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import CooperativePage from "./pages/CooperativePage.jsx";
import CooperativesListing from "./pages/CooperativesListing.jsx";

function App() {
  return (
    <div>
      {/* <Header />
       <div style={{'minHeight':'fit-content'}}> 
       <LandingPage />
        <Vitrine />
       </div>
       <Footer/>
      
      <AboutPage />
       <ProductDetails />
       <CooperativePage />
        <CooperativesListing />
      */}
    </div>
  );
}

export default App;
