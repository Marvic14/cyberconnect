import "./Header.scss"
import {Link} from "react-router-dom";
import Logo from "@/assets/logo.webp"

export default function Header(){
    return (
        <header className="header">
            <div className="div-logo">
                <img src={Logo} alt="logo da Cyber Connect"/>
            </div>
            <nav className="menu">
                <ul className="nav">
                    <li className="nav-item"><Link to={"/"}>Início</Link></li>
                    <li className="nav-item"><Link to={"/products"}>Produtos</Link></li>
                    <li className="nav-item"><Link to={"/about"}>Quem Somos</Link></li>
                    <li className="nav-item"><Link to={"contacts"}>Contatos</Link></li>
                </ul>
            </nav>
        </header>
    )
}