import React from 'react';
import { NavLink } from 'react-router-dom';
import './componentstyle.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">
        {/* <img src="images/logo_exegi.png" alt='#'/> */}
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            REPUBLIC
          </NavLink>
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
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Investors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/businesses">
                  Businesses
                </NavLink>
              </li>
              <li className="nav-item">
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-secondary" type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <NavLink className="btn btn-outline-primary me-2" to="/login">
                Log in
              </NavLink>
              <NavLink className="btn btn-outline-primary" to="/signup">
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
