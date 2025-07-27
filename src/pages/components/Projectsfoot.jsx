import React from "react";
import { Link } from "react-router-dom";
import '../../components/header/header.css';

const Projectsfoot = () => {


  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
  <>
    <footer>
      <Link
          to="/"
          className="footer__logo"
          onClick={(e) => {
          setTimeout(() => {
            const element = document.getElementById("home");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }, 100);
          }}
        >
          Web DESIGNER
      </Link>
      <ul className="permalinks">
        <li>
          <Link
            to="/"
            onClick={(e) => {
              setTimeout(() => {
                const element = document.getElementById("home");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            Home<br/><span className="foot-translate">首頁</span>
          </Link>
        </li>
        <li>
          <Link
              to="/"
              onClick={(e) => {
                setTimeout(() => {
                  const element = document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              About<br/><span className="foot-translate">簡介</span>
          </Link>
        </li>
        <li>
          <Link
              to="/"
              onClick={(e) => {
                setTimeout(() => {
                  const element = document.getElementById("experience");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              Skills<br/><span className="foot-translate">技能</span>
          </Link>
        </li>
        <li>
          <Link
              to="/"
              onClick={(e) => {
                setTimeout(() => {
                  const element = document.getElementById("timeline");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              Experience<br/><span className="foot-translate">經歷</span>
          </Link>
        </li>
        <li>
        <Link
              to="/"
              onClick={(e) => {
                setTimeout(() => {
                  const element = document.getElementById("portfolio");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
            >
              Projects<br/><span className="foot-translate">專案</span>
          </Link>
        </li>
        {/*<li><a href="#testimonials">Testimonials</a></li>*/}
        {/*<<li><a href="#contact">Contact</a></li>*/}
      </ul>
      <div className="footer__copyright">
        <small>&copy; Will {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  </>
  );
};

export default Projectsfoot;
