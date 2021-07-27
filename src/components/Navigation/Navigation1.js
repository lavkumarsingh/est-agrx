import React from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from "react-router-dom";

import './Navigation1.css'

// PAGES
import Home from '../../pages/home/home'
import About from '../../pages/about/about'
import Technology from '../../pages/technology/technology'
import Partners from '../../pages/partners/partners'

function Nav() {

    return (    
          <Router>
              <nav>
              </nav>

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
    )
}

export default Nav


/* 

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

*/