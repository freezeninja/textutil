
import './App.css';
import From from './components/From';
import About from './components/About';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alert from './components/Alert';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState(null);

  const propAlert = (msg, smTxt, type = 'success', time = 2000)=>{
    let obj = {
      msg: msg,
      smTxt: smTxt,
      type: type,
      time: time
    }
    setAlert(obj);
    setTimeout(()=>{
      setAlert(null);
    },time)
  } 

  return (
    <Router>
      <div>
        <Navbar title="Text Utils" link1="Home" link2="About" />
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<From heading="Modify your text ~" placeholder="Start typing..." propAlert={propAlert} />}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
