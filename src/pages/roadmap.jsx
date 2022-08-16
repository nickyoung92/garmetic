//colabs ready but debating adding more i.e. mint pass call to action

import React from "react";

import DarkTheme from "../layouts/Dark";
import Roadmap from "../components/Sections/roadmapSection";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";

const Mint = () => {
    const fixedHeader = React.useRef(null);
    const MainContent = React.useRef(null);
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);

    React.useEffect(() => {
      setInterval(() => {
        if (fixedHeader.current) {
          var slidHeight = fixedHeader.current.offsetHeight;
        }
        if (MainContent.current) {
          MainContent.current.style.marginTop = slidHeight + "px";
        }
      }, 1000);
      var navbar = navbarRef.current;
      if (window.pageYOffset > 0) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
          navbar.classList.add("nav-scroll");
        } else {
          navbar.classList.remove("nav-scroll");
        }
      });
    }, [fixedHeader, MainContent, navbarRef]);
  return (
    <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef}/>
      
        <Roadmap/>
        <Footer />
        
    </DarkTheme>
  );
};

export default Mint;

