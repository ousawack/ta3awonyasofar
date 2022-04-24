
import XXX from '../components/XXX.js'
import Authentification from './Authentification.js';
import './App.css'
import { BrowserRouter as Router, Routes ,Route} from "react-router-dom";

function App() {


  return (
    <Router>
      <XXX />
      <Routes>
            <Route exact path="/" element={<Authentification />} />
            <Route path="/xxx" element={<XXX />} />
      </Routes>
    </Router>
    // <div className="App">
  );
}

export default App;
