import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutUs}</a>
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode ==='light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
        </div>

        <div className="d-flex ms-3">
            <button className="color-btn me-2" onClick={() => props.changeBgColor('#048484')} style={{ backgroundColor: '#048484' }}></button>
            <button className="color-btn me-2" onClick={() => props.changeBgColor('#89b1c4')} style={{ backgroundColor: '#89b1c4' }}></button>
            <button className="color-btn me-2" onClick={() => props.changeBgColor('#7c8e75')} style={{ backgroundColor: '#7c8e75' }}></button>
            <button className="color-btn me-2" onClick={() => props.changeBgColor('#022348')} style={{ backgroundColor: '#022348' }}></button>
            <button className="color-btn me-2" onClick={() => props.changeBgColor('#301541')} style={{ backgroundColor: '#301541' }}></button>
            <button className="color-btn me-2" onClick={() => props.changeBgColor('#eee9d2')} style={{ backgroundColor: '#eee9d2' }}></button>
        </div>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success mx-2" type="submit">{props.search}</button>
        </form> */}
      </div>
    </div>
  </nav>
//   <Navbar/>
  
           
  )
}

Navbar.propTypes ={ 
    title: PropTypes.string.isRequired,
    aboutUs: PropTypes.string,
    home: PropTypes.string,
    search: PropTypes.string,
}

Navbar.defaultProps ={ 
    title: "TwxtUtills",
    aboutUs: "About",
    search: "Search"
}
