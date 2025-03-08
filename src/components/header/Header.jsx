import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Will</h1>
        <h5 className="text-light">Web DESIGNER</h5>
        <CTA />
        <a href="#portfolio" className="scroll__down" alt="滑動到專案">
          Scroll Projects
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
