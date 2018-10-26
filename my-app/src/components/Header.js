import React from 'react';

class Header extends React.Component {
  render() {
    return (<nav
      className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">Tanmayee Kalluri</a>
        <div className="" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#emp"
              >Work Experience
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#dept"
              >Projects
              </a>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <a
                className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#login"
              >Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
            </nav>);
  }
}

export default Header;
