import React from "react";
import { Link } from "react-router-dom"
import Logo from "../../assets/img/stringflix.png"
import "./menu.css"
import ButtonLink from "../helper";
function Menu() {
   return (
      <nav className="Menu">
         <Link to="/">
            <img className="Logo" src={Logo} alt="StingFlix" />
         </Link>

         <ButtonLink to="/cadastro/video" className="ButtonLink">
            Novo Vídeo
         </ButtonLink>
      </nav>
   )

}

export default Menu