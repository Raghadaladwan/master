import React, { Component } from "react";
import { Link } from "react-router-dom";

class headerComponent extends Component {
  state = {};
  render() {
    return (
   
      <div class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Logo
          </a>

          <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Trainee Future
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/postspage">
                  Posts Page
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">
                  Register
                </Link>
              </li>


{/* ____________________________________________Dropdown _________________ */}




<li class="nav-item dropdown">
              <Link
                class=" dropdown-toggle"
                data-toggle="dropdown"
                href="/#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ height: "100%" }}
              >
                Login
              </Link>
              <div class="dropdown-menu" 
              style={{ width: "100%", padding: "25px" }} >
                <Link
                  class="dropdown-item"
                  to="/login"
                  style={{ height: "100%" , marginBottom: "20px" }}
                >
                 As a Company
                </Link>
                <Link
                  class="dropdown-item"
                  to="/logintrainee"
                  style={{ height: "100% !important" }}
                >
                 As a Trainee
                </Link>
              </div>
            </li>

{/* ________________________________________________________________________ */}

              
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/logOut">
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default headerComponent;
