
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#1e609b'
      showAlert("Dark mode has been enabled", "success")
      // document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      // document.title = 'TextUtils - Light Mode'
    }

  }
  return (
    <>
        <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
          <Routes>
            <Route exact path="/about" element={<About  mode={mode}/>}  />
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Charactor Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
      </div>
        </Router>
    </> 
  );
}

export default App;
