import "./Header.scss"
import {Link} from "react-router-dom";
import Logo from "@/assets/img/ui/logo.webp";
import IconeWhatsApp from "@/assets/img/icons/WhatsApp.webp"
import { FaHome } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";

export default function Header(){
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-div">
                    <img src={Logo} alt="logo da Cyber Connect"/>
                </div>
                <nav className="menu">
                    <ul className="nav">
                        <li className="nav-item"><Link to={"/"} className="bolder active"><FaHome/> Início</Link></li>
                        <li className="nav-item"><Link to={"/products"} className="bolder"><IoTicket/>Ofertas</Link></li>
                        <li className="nav-item"><Link to={"contacts"} className="bolder"><FaHeadphones/>Contatos</Link></li>
                        <li className="nav-item"><Link to={"/about"} className="bolder"><IoIosContacts/>Quem Somos</Link></li>
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
    )
}