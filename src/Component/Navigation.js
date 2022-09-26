import React from "react";
import Proptypes from "prop-types";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";



export default function Navigation(props) {

  const navigate = useNavigate();

  const handleClick = (routeName) => {
       navigate(routeName);
  }



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./Allennav.png" alt="Allen Logo" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarText" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {props.title}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  {props.about}
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.career}
                </a>
              </li>
            </ul>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-success me-md-2" type="button" onClick={() => handleClick("/loginpage")}>
                Login
              </button>
              <button className="btn btn-success me-md-2" type="button" onClick={() => handleClick("/signupPage")}>
                Sign Up
              </button>
            </div>
            <span className="navbar-text">
              <a href="https://www.allendigital.in/courses" target="_main">
                <button type="button" className="btn btn-success">
                  Go to Courses
                </button>
              </a>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  title: Proptypes.string,
  about: Proptypes.string,
  career: Proptypes.string,
};
