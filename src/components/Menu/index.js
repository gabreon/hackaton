import { useState } from "react";
import { Link } from "react-scroll";
import "./Menu.css";
import fullLogo from "../../res/full-logo.png";

const Menu = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/">
        <img className="logo" src={fullLogo} alt="" />
      </a>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <Link
            to="header"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Início</a>
            </li>
          </Link>
          <Link
            to="about"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Quem somos</a>
            </li>
          </Link>
          <Link
            to="business-model"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Modelo de negócios</a>
            </li>
          </Link>
          <Link
            to="challenges"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Desafio</a>
            </li>
          </Link>
          <Link
            to="mentors"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Mentores</a>
            </li>
          </Link>
          <Link
            to="partners"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Parceiros</a>
            </li>
          </Link>
          <Link
            to="statute"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Regulamento</a>
            </li>
          </Link>
          <Link
            to="subscription"
            smooth={true}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <li>
              <a href="/">Inscrição</a>
            </li>
          </Link>
        </ul>
      </div>

      <button className="registration-menu">Inscreva sua equipe</button>
    </nav>
  );
};

export default Menu;
