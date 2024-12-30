// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// let name ="÷"
function App() {
  
  const [ mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      kind: type
    })
    setTimeout(() => {
        setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if (mode === 'light')
    { 
      setMode('dark')
      document.body.style.backgroundColor = '#040438';
      showAlert("Dark mode has been enabled!!!", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled!!!", "success");

    }

  }
  return (
   <>
     <Navbar title="TextUtils" aboutUs="Abouts" home="Home" search="Search" mode={mode} toggleMode={toggleMode} />
     {/* <Navbar title="TextUtils"  home="Home"/>
     <Navbar/> */}
     <Alert alert={alert}/>
     <div className="container">
        <TextForm mode={mode}/>
     </div>
   </>   
  );
}

export default App;
