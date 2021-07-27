import React, { useState } from 'react';
import './App.css';


import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch } from "react-router-dom";

// COMPONENTS
//import Nav from './components/Navigation/Navigation.js'
// PAGES
import Home from './pages/home/home'
import About from './pages/about/about'
import Technology from './pages/technology/technology'
import Partners from './pages/partners/partners'


function App() {
  const [toggle, setToggle] = useState(false)

  function handleClick() {
    toggle ? setToggle(false) : setToggle(true)
  }
  return (
    <div className="App">
          <Router>
                  <nav>
                    {/* LOGO */}
                    <div className='logo'>
                      <img src='/logo.png' alt='' />
                    </div>
                    <div className='top'>
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


                    {toggle ? <div className='menu_icon' onClick={handleClick}><img src='/icons8-delete-60.png' alt='' /></div>
                            : <div className='menu_icon' onClick={handleClick}><img src='/icons8-menu-50.png' alt='' /></div>}
                    <div className={`side_nav  ${toggle ? 'nav_active': ''}`}>
                    <div className='side'>
                      <div>
                        <li>
                          <Link onClick={handleClick} to='/'>Home</Link>
                        </li>
                        <li>
                          <Link onClick={handleClick} to='/about'>About</Link>
                        </li>
                        <li>
                          <Link onClick={handleClick} to='technology'>Technology</Link>
                        </li>
  {/*                       <li>
                          <Link to='partners'>Partners</Link>
                        </li> */}
                      </div>
                    </div>
                    </div>
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
      </div>
  );
}

export default App;


/* 
       <div className='side'>
        <div className='menu_icon' onClick={handleClick}></div>

        <div className={`side_nav ${toggle ? 'nav_active' : ''}`}>  
        </div>
      </div>

*/