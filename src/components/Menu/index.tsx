import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/stringflix.png';
import './menu.css';
// import ButtonLink from '../helper';

const Menu: React.FC = () => (
  <nav className="Menu">
    <Link to="/">
      <img className="Logo" src={Logo} alt="StingFlix" />
    </Link>

    <Link to="/cadastro/video" className="ButtonLink">
      Novo Vídeo
    </Link>
  </nav>
);

export default Menu;
