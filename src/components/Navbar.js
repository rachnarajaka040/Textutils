import React from "react";
import  propTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
           {props.el3}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
              {props.el1}
             </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
              {props.el2}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
              {props.el4}
              </Link>
            </li>

          </ul>

          <div className="d-flex">
           <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'30px',width:'30px'}}></div>
           <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:'30px',width:'30px'}}></div>
           <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:'30px',width:'30px'}}></div>
           <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:'30px',width:'30px'}}></div>
          </div>

          <div className={`form-check form-switch text-${props.mode==='dark'?'white':'black'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox"
              onClick={()=>{props.toggleMode(null)}}
            />
           <label className="form-check-label" htmlFor="flexswitchcheckDefault">ToggleMode</label>
          </div>
          
          {/* <div className={`form-check form-switch text-${props.mode==='dark'?'white':'black'}`}>
            <input
              className="form-check-input"
              type="checkbox"
              id="checkbox"
              onClick={props. toggleMode1}
            />
           <label className="form-check-label" htmlFor="flexswitchcheckDefault">Enablegreen</label>
          </div> */}

        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {title:propTypes.string.isRequired,
                    el1:propTypes.string,
                    el2:propTypes.string,
}

Navbar.defaultProps = {
     title : 'Default name',
     el1 : 'Default home',
     el2 : 'Default About',
}
