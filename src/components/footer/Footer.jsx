import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

// 滑动到指定位置的函数
const ScrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <Link to="#" className="footer__logo" onClick={() => ScrollToSection('home')}>Web DESIGNER</Link>
      <ul className="permalinks">
        <li>
          <Link to="#" onClick={() => ScrollToSection('home')}>Home<br /><span className="foot-translate">首頁</span></Link>
        </li>
        <li>
          <Link to="#" onClick={() => ScrollToSection('about')}>About<br /><span className="foot-translate">簡介</span></Link>
        </li>
        <li>
          <Link to="#" onClick={() => ScrollToSection('experience')}>Skills<br /><span className="foot-translate">技能</span></Link>
        </li>
        <li>
          <Link to="#" onClick={() => ScrollToSection('timeline')}>Experience<br /><span className="foot-translate">經歷</span></Link>
        </li>
        <li>
          <Link to="#" onClick={() => ScrollToSection('portfolio')}>Projects<br /><span className="foot-translate">專案</span></Link>
        </li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        {/* <li><a href="#contact">Contact</a></li> */}
      </ul>
      <div className="footer__copyright">
        <small>&copy; Will {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
