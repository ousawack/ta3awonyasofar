
import Header from './components/Header.js'
import Footer from './components/Footer'
import './App.css'
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";

function App() {


  return (
    <div>
       <Header />
       <Footer/>
    </div>
  );
}
// reusable componenet folder ( common ): main button, pop up modal, loader  

export default App;
