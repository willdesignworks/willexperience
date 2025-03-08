import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo">Web DESIGNER</a>
      <ul className="permalinks">
        <li><a href="#home">Home<br/><span className="foot-translate">首頁</span></a></li>
        <li><a href="#about">About<br/><span className="foot-translate">簡介</span></a></li>
        <li><a href="#experience">Skills<br/><span className="foot-translate">技能</span></a></li>
        <li><a href="#timeline">Experience<br/><span className="foot-translate">經歷</span></a></li>
        <li><a href="#portfolio">Projects<br/><span className="foot-translate">專案</span></a></li>
        {/*<li><a href="#testimonials">Testimonials</a></li>*/}
        {/*<<li><a href="#contact">Contact</a></li>*/}
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/meri-gogichashvili/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Meri-MG" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://angel.co/u/meri-gogichashvili" target="_blank" rel="noreferrer" ><FaAngellist /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Will {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
