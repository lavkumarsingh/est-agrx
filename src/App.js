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

  function focus() {
    setToggle(false)
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
                          <Link onClick={focus} to='/'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" fill="none" x="0px" y="0px"><path d="M32 30V13.7613C32 13.1537 31.7238 12.5791 31.2494 12.1995L17.2494 0.999512C16.519 0.415162 15.481 0.415163 14.7506 0.999513L0.75061 12.1995C0.276179 12.5791 0 13.1537 0 13.7613V30C0 31.1046 0.89543 32 2 32H9.73333C10.8379 32 11.7333 31.1046 11.7333 30V22.2667C11.7333 21.1621 12.6288 20.2667 13.7333 20.2667H18.2667C19.3712 20.2667 20.2667 21.1621 20.2667 22.2667V30C20.2667 31.1046 21.1621 32 22.2667 32H30C31.1046 32 32 31.1046 32 30Z" fill="black"/><text x="0" y="47" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Maru</text><text x="0" y="52" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link onClick={focus} to='/about'>About</Link>
                        </li>
                        <li>
                          <Link onClick={focus} to='technology'>Technology</Link>
                        </li>
                        <li>
                          <Link onClick={focus} to='partners'>Partners</Link>
                        </li>
                      </div>
                    </div>
                    </div>
                  </nav>
                  <div  onClick={focus}>
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
                  </div>
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


/* 

1. RSDTP
2. DTP ID
3. Execute 

*/