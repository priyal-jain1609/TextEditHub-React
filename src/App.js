
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');

  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1000);

  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="grey";
    showAlert("Dark Mode has been Enabled","success");
    document.title="TextUtils- DarkMode"
    // setInterval(() => {
    //   document.title="TextUtils is Amazing"
      
    // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been Enabled","success");
      document.title="TextUtils- LightMode"
      // setInterval(() => {
      //   document.title="Install TextUtils is Now"
        
      // }, 1000);

    }
  }
  return (

<Router>
      <Navbar title="TextEditHub" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>


 
  );
}

export default App;
