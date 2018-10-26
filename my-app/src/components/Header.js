import React from 'react';
import {Link, Route, Switch} from  'react-router-dom'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Contact from './Contact'
import Home from './Home'

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
            <Link exact to="/home" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
              Home
              </Link>
            </li>

            <li className="nav-item mx-0 mx-lg-1">
            <Link exact to="/workex" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
              Work Experience
              </Link>
            </li>

            <li className="nav-item mx-0 mx-lg-1">
              <Link exact to="/projects" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
              Projects
              </Link>
            </li>

            <li className="nav-item mx-0 mx-lg-1">
              <Link exact to="/contact" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger">
              Contact
              </Link>
            </li>

          </ul>

          <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/workex" component={WorkExperience}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          </Switch>
        </div>
      </div>
            </nav>);
  }
}

export default Header;
