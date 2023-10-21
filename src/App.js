
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#021930"
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Enabled","success")
    }
  }
  return (
    <>
    <Router>
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   

   <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>

          <Route exact path="/">
          <Textform  mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
   </Router>
   </>
  );
}

export default App;
