import { PawPrint } from "@phosphor-icons/react";
import './Header.css'
import { NavLink } from "react-router-dom";

export default function Header() {

  return (
      <header id="header">
          <div className="logo">
            <PawPrint size={80} />
            <div>
              <h1>Doação de animais</h1>
              <span>Site sem fins lucrativo apenas fazemos o network</span>
            </div>
          </div>
          <nav className="menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/cadastrar">Cadastrar</NavLink>
          </nav>
      </header>
  )
}