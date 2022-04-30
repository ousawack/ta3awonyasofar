
import Header from './components/Header.js'
import Footer from './components/Footer'
import Cart from './components/Cart.js';
import Cooperatives from './components/Cooperatives.js';
import Vitrine from './pages/Vitrine.js';
import './App.css'
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";

function App() {


  return (
    <div>
       <Header />
       <div style={{'minHeight':'fit-content'}}> 
       
        <Vitrine/>
       </div>
       <Footer/>
    </div>
  );
}

export default App;
