// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name ="÷"
function App() {
  
  const [ mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light')
    { 
      setMode('dark')
      document.body.style.backgroundColor = '#040438'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }

  }
  return (
   <>
     <Navbar title="TextUtils" aboutUs="Abouts" home="Home" search="Search" mode={mode} toggleMode={toggleMode} />
     {/* <Navbar title="TextUtils"  home="Home"/>
     <Navbar/> */}
     <div className="container">
        <TextForm mode={mode}/>
     </div>
   </>   
  );
}

export default App;
