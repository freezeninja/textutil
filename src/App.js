
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
import QrCode from './components/QrCode';
import BarCode from './components/BarCode';

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

  let NavObj = {
    title: 'Pocket Services',
    Link1: 'Text Util',
    Link2: 'About',
    Link3: 'Make QR Code',
    Link4: 'Make BarCode',
  }

  return (
    <Router>
      <div>
        <Navbar NavData={NavObj}/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<From heading="Modify your text ~" placeholder="Start typing..." propAlert={propAlert} />}/>
          <Route exact path="/QrCode" element={<QrCode/>}/>
          <Route exact path="/barcode" element={<BarCode/>}/>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
