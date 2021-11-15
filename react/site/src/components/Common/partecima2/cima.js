/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
// import { CSSTransition } from "react-transition-group";
import { Responsivo } from "./styled";
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'


export default function Header(props) {
  const [search, setSearch] = useState();
  const navig = useHistory();

  function keyPress(event) {

    if(event.charCode === 13) {
        navig.push(`/busca?search=${search}`);
    }
  }









  /// meu
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
      <Responsivo>
        <header className="Header">
          <Link to="/">
          <div className="logoo">
            <img src="/assets/images/nice library png 1.svg" className="Logo" alt="logo" />
            <img src="/assets/images/Bookly.svg" className="Logo" alt="logo" />
          </div>
          </Link>
        {/* <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
            classNames="NavAnimation"
            unmountOnExit
        > */}
            


            <nav className="Nav">
              <Link to="/login">
                <div className="menu-item">
                  <img src="/assets/images/bag.svg" alt="" />
                  Sua Sacola
                </div>
              </Link>
              <Link to="/login">
                <div className="menu-item">
                <img src="/assets/images/coracaoo.svg" alt="" />
                  Seus Favoritos
                </div>
              </Link>
              <Link to="/login">
                <div className="menu-item">
                  <img src="/assets/images/profilee (1).svg" alt=""  />
                  Login
                </div>
              </Link>
           
            </nav>
       {/* </CSSTransition> */}
        <button onClick={toggleNav} className="Burger">
            🍔
        </button>
        </header>
        </Responsivo>
  );
  
}
