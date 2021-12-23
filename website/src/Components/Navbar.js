// Dependency Imports
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  NavLink,
} from 'react-router-dom';
import Styled from 'styled-components';

//  File Imports
import Home from '../Pages/Home/home';
import About from '../Pages/About/about';
import Blog from '../Pages/Blog/blog';
import Portfolio from '../Pages/Portfolio/portfolio';
import Contact from '../Pages/Contact/contact';
import logo from '../media/logo.svg';
import searchIcon from '../media/searchIcon.svg';
import '../App.css';

// Component Styling

const Wrapper = Styled.div`



@media only screen and (max-width: 1023px) {


  .nav-links, .search {
    display: none;
  }

} 

@media only screen and (min-width: 1024px)  {

.hamburger {
  display: none;
}
}} 



@media only screen and (max-width: 1800px) {


.header {
  width: 620px;
};



} ;



.navbar {

    
}

header {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 999;
    top: 0;
    margin-top: 2rem;
    width: 90%;
    max-width: 1400px; 
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${(props) => props.theme.colors.darkGray};
    border-radius: 25px;
    height:100px;
    border: solid .5px black;
    transition: all 0.5s;

    &.toggleOff {
      transform: translateY(-200px);
    }
}





.nav-link, li {
    
    font-family: ${(props) => props.theme.fonts.primary};
    display: inline-block;
    padding: 10px 20px;
    transition: all 0.3s ease 0s;
    font-size: 1.2rem;
    font-weight: 400px;
    text-decoration: none;
    
  
  }


  a {

    text-decoration: none;
    color: ${(props) => props.theme.colors.tan};
    font-weight: bold;
    
   
  }


a:hover {
  color: ${(props) => props.theme.colors.orange};
  transition: ease-in-out 500ms ;
}



  .active {
    /* color: ${(props) => props.theme.colors.orange}; */
    transition: 2s ease-out;
  }

  .active:after {
  content:""; 
  float:left; 
  background:${(props) => props.theme.colors.orange}; 
  width:100%; 
  height:6px; 
  border-radius: 3px;
  transition: background-color 2s ease-in-out;
  z-index: 3;
  
  
  }


.nav-link {
  list-style: none;
  text-decoration: none;
  font-weight: 200px;
}


.search {
  margin-right: 20px; 
}

.logo  {
    height: 70%;
    margin-left: 20px;
  
}










/* Hamburger Icon Styling */


.hamburger {
  margin-right: 20px;
  height: 40px;
  width: 40px;
}

.rect1 {
 
 fill: ${(props) => props.theme.colors.tan};
}

.rect2 {

 fill: ${(props) => props.theme.colors.tan};
}

.rect3 {

fill: ${(props) => props.theme.colors.orange};
}



/* Responsive Style Changes */


@media only screen and (min-width: 1370px) {

.hamburger {
  display: none;
};


};


@media only screen and (max-width: 1370px) {


.nav-links, .search {
  display: none;
};


header {
  width: 90%;
  height: 70px;
};


}; 






`;

//Function that hides the header when scrolling down and reveals when scrolling up
window.onscroll = function (e) {
  let elem = document.getElementById('navbar');

  //Will begin hiding header after scrolling 100px down.
  if (this.scrollY > 100) {
    if (this.oldScroll < this.scrollY) {
      elem.classList.add('toggleOff');
    } else {
      elem.classList.remove('toggleOff');
    }
  }
  this.oldScroll = this.scrollY;
};

const Navbar = () => {
  return (
    <Router>
      <Wrapper>
        <div>
          <div className="navbar">
            <header id="navbar">
              {/* TODO: Prevent logo clicking from reloading entire page. Use Router correclty  */}
              <a href="/">
                <img className="logo" src={logo} alt="logo"></img>
              </a>

              <nav>
                <ul className="nav-links">
                  <li className="nav-link">
                    <NavLink exact activeClassName="active" to="/">
                      HOME
                    </NavLink>
                  </li>

                  <li className="nav-link">
                    <NavLink exact activeClassName="active" to="/About">
                      ABOUT
                    </NavLink>
                  </li>

                  <li className="nav-link">
                    <NavLink exact activeClassName="active" to="/Blog">
                      BLOG
                    </NavLink>
                  </li>

                  <li className="nav-link">
                    <NavLink exact activeClassName="active" to="/Portfolio">
                      PORTFOLIO
                    </NavLink>
                  </li>

                  <li className="nav-link">
                    <NavLink exact activeClassName="active" to="/Contact">
                      CONTACT
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <a href="">
                <img className="search" src={searchIcon} alt="search"></img>
              </a>

              <svg
                className="hamburger"
                viewBox="0 0 100 80"
                width="40"
                height="40"
              >
                <rect
                  className="rect1"
                  y="0"
                  width="100"
                  height="15"
                  rx="7"
                ></rect>
                <rect
                  className="rect2"
                  y="30"
                  width="100"
                  height="15"
                  rx="7"
                ></rect>
                <rect
                  className="rect3"
                  y="60"
                  x="30"
                  width="70"
                  height="15"
                  rx="7"
                ></rect>
              </svg>



              
            </header>
          </div>

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Blog" element={<Blog />} />
            <Route exact path="/Portfolio" element={<Portfolio />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Wrapper>
    </Router>
  );
};

export default Navbar;
