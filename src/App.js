import React from "react";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removebodyclass=()=>
  {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) => {
    //console.log(cls);
    removebodyclass();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode hase been enabled", "success");
      document.title = 'TextUtils-darkMode';
    //   setInterval(() => {
    //     document.title = 'Its amazing-darkMode';
    //   }, 2000)

    //   setInterval(() => {
    //     document.title = 'Its-good';
    //   }, 3000)
     }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'lightgrey';
      showAlert("light mode hase been enabled", "success");
      document.title = 'TextUtils-lightMode';
    }
  }

  const toggleMode1 = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode hase been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert("light mode hase been enabled", "success");
    }
  }

  return (

    <Router>
      <Navbar el3="Home" el1="About" el2="Contact us" el4="Product" mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} />
      <Alert alert={alert} />
      <div className="Container my-3">
        <Routes>
        <Route  exact path="/Home" element={<Textform heading="Try TextUtils-Word Counter,Character Counter,Remove extra spaces" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/About" element={<About />} />
          

        </Routes>

      </div>
    </Router>


  );
}

export default App;
