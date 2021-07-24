import React, { useState } from 'react'
/* import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close'; */
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from "react-router-dom";

import './Navigation.css'

// PAGES
import Home from '../../pages/home/home'
import About from '../../pages/about/about'
import Technology from '../../pages/technology/technology'
import Partners from '../../pages/partners/partners'

function Nav() {
    const [toggle, setToggle] = useState(false)
    return (
        <div>
          <div className='side_nav'>
{/*             toggle  ? <CloseIcon style={{color: "#fff", fontSize: 30}} />
                    : <MenuIcon style={{color: "#fff", fontSize: 30}} /> */}
          </div>
      
          <Router>
              <div className=''>
              <nav>
                {/* LOGO */}
                <div className='logo'>AGRX</div>

                <div className='list_container'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/about'>About</Link>
                  </li>
                  <li>
                    <Link to='technology'>Technology</Link>
                  </li>
                  <li>
                    <Link to='partners'>Partners</Link>
                  </li>
                </div>
              </nav>
              </div>

              <Switch>
                <Route path='/about'>
                  <About />
                </Route>
                <Route path='/technology'>
                  <Technology />
                </Route>
                <Route path='/partners'>
                  <Partners />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
          </Router>
        </div>
    )
}

export default Nav
