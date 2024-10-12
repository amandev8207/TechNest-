import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";


const Header = () => {

  const [scrolled,setscrolled] = useState(false);

  const HandleScroll = () => {
    const offsets = window.scrollY;
    if(offsets > 200){
      setscrolled(true);
    }else{
      setscrolled(false);
    }
    console.log(offsets);
  }
  useEffect(() => {
    window.addEventListener("scroll",HandleScroll);
  },[]);
  return (
    <>
      <nav className={ `navbar navbar-expand-lg nav_sec1 ${scrolled ? "sticky_nav1" : ""} `}>
        <div className="container gx-0">
          <NavLink>
            <img src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto  mb-lg-0 nav_ul">
              <li className="nav_li">
                <NavLink>Home</NavLink>
              </li>
              <li className="nav_li">
              <NavLink>About</NavLink>
              </li>
              <li className="nav_li">
              <NavLink>Products</NavLink>
              </li>
              <li className="nav_li">
              <NavLink>Contacts Us</NavLink>
              </li>
            </ul>
            <form className="cart1 d-flex align-items-center mx-4">
              <img src="https://cdn-icons-png.flaticon.com/512/1040/1040225.png" 
              width="26" height="26" alt="lens" />
            </form>
            <form className="d-flex" role="search">
            
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
