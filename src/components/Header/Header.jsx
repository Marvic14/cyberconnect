import "./Header.scss"
import {Link} from "react-router-dom";
import Logo from "@/assets/img/ui/logo.webp";
import IconeWhatsApp from "@/assets/img/icons/WhatsApp.webp"
import { FaHome } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import {useMobileMenu } from "@/hooks/useMobileMenu";
import {FaBars, FaTimes} from "react-icons/fa";
import { createPortal } from 'react-dom';
import { NavLink } from "react-router-dom";

export default function Header(){
    const { menuAtivo, toggleMenu } = useMobileMenu();
    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="logo-div">
                        <Link to="/">
                            <img src={Logo} alt="logo da Cyber Connect" />
                        </Link>
                    </div>
                    <nav className="menu">
                        <ul className="nav">
                            <li className="nav-item">
                                <NavLink to="/homepage" className="bolder">
                                    <FaHome/> Início
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/products" className="bolder">
                                    <IoTicket/> Ofertas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacts" className="bolder">
                                    <FaHeadphones/> Contatos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="bolder">
                                    <IoIosContacts/> Quem Somos
                                </NavLink>
                            </li>
                        </ul>
                        <div className="neon-blue-line"></div>
                    </nav>
                    <div className="header-button-div">
                        <button className="btn-whatsapp">
                            <div className="div-whatsapp-btn">
                            <img src={IconeWhatsApp} alt="Ícone do WhatsApp"/>
                            </div>
                            <span className="glow">Grupo</span><br/>
                            <span className="bolder">WhatsApp</span>
                        </button>
                    </div>
                </div>
            </header>
            <button className="menu-toggle" onClick={toggleMenu}>
                {menuAtivo ? <FaTimes className="mobile-icon"/> : <FaBars className="mobile-icon"/>}
            </button>
            {/* O Portal joga o menu para fora da estrutura animada */}
            {createPortal(
                <nav className={`mobile-menu ${menuAtivo ? "active" : ""}`}>
                    <ul className="nav">
                        <li><NavLink to="/homepage" onClick={toggleMenu}>Início</NavLink></li>
                        <li><NavLink to="/products" onClick={toggleMenu}>Ofertas</NavLink></li>
                        <li><NavLink to="/about" onClick={toggleMenu}>Quem Somos</NavLink></li>
                        <li><NavLink to="/contacts" onClick={toggleMenu}>Contatos</NavLink></li>
                    </ul>
                </nav>,
                document.body
            )}
        </>
    )
}