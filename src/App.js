
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';



function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark') 
      document.body.style.backgroundColor = '#1e609b'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
   }
    
  }
  return (
    <>
<Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<div className="container my-3" >
<TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert} />
{/* <About/> */}
</div>


    </>
  );
}

export default App;
