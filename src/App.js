// // import logo from './logo.svg';
// import { useState, useEffect} from 'react';
// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// // let name ="÷"
// function App() {
  
//   const [ mode, setMode] = useState('light');
//   const [alert, setAlert] = useState(null)
//   const [bgColor, setBgColor] = useState('white'); // Background Color State

//   const showAlert=(message, type)=>{
//     setAlert({
//       msg: message,
//       kind: type
//     })
//     setTimeout(() => {
//         setAlert(null)
//     }, 2000);
//   }
//   const toggleMode = ()=>{
//     if (mode === 'light')
//     { 
//       setMode('dark')
//       document.body.style.backgroundColor = '#040438';
//       showAlert("Dark mode has been enabled!!!", "success");
//     }
//     else{
//       setMode('light')
//       document.body.style.backgroundColor = 'white'
//       showAlert("Light mode has been enabled!!!", "success");

//     }

//   }

//   const changeBgColor = (color) => {
//     setBgColor(color); // Update State
//     document.body.style.backgroundColor = color; // Apply Color
//   }
//     // Get the body background color when the component mounts
//   useEffect(() => {
//     const bodyBgColor = window.getComputedStyle(document.body).backgroundColor;
//     console.log("I am called!! & color is ",bodyBgColor )
//     setBgColor(bodyBgColor); // Set the bgColor state to the body color
//   }, []);
  
//   return (
//    <>
//      <Navbar title="TextUtils" aboutUs="Abouts" home="Home" search="Search" mode={mode} toggleMode={toggleMode} changeBgColor={changeBgColor} />
//      {/* <Navbar title="TextUtils"  home="Home"/>
//      <Navbar/> */}
//      <Alert alert={alert}/>
//      <div className="container">
//         <TextForm mode={mode} changeBgColor={changeBgColor}/>
//      </div>
//    </>   
//   );
// }

// export default App;

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState('white'); // State for background color
  // Map hex colors to color names
  const colorNameMap = {
    '#048484': 'Teal',
    '#89b1c4': 'Light Blue',
    '#7c8e75': 'Olive Green',
    '#022348': 'Dark Blue',
    '#301541': 'Dark Purple',
    '#eee9d2': 'Light Beige',
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      kind: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#040438'; // Dark mode background color
      showAlert("Dark mode has been enabled!!!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light mode background color
      showAlert("Light mode has been enabled!!!", "success");
    }
  };

  const changeBgColor = (color) => {
    setBgColor(color); // Update State
    document.body.style.backgroundColor = color; // Apply Color to Body
    const colorName = colorNameMap[color] || 'Unknown Color';
    showAlert(`${colorName} mode has been enabled!!!`, "success")
  };

  return (
    <>
      <Navbar title="TextUtils" aboutUs="Abouts" home="Home" search="Search" mode={mode} toggleMode={toggleMode} changeBgColor={changeBgColor} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm mode={mode} bgColor={bgColor} /> {/* Pass bgColor as prop */}
        <About/>
      </div>
    </>
  );
}

export default App;
