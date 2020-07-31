import React from "react";
import Logo from "../../assets/img/stringflix.png"
import "./menu.css"
import ButtonLink from "../helper";
function Menu() {
   return (
      <nav className="Menu">
         <a href="/">
            <img className="Logo" src={Logo} alt="StingFlix" />
         </a>

         <ButtonLink href="/" className="ButtonLink">
            Novo Vídeo
         </ButtonLink>
      </nav>
   )

}

export default Menu