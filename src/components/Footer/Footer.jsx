import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "@/assets/img/ui/logo.webp"
import "./Footer.scss";
import { FaWhatsapp, FaEnvelope, FaShieldAlt, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Coluna 1: Branding e Propósito */}
                <div className="footer-section brand">
                    <img src={Logo} className="footer-logo" alt=""/>
                    <p>Construindo o futuro da web com precisão<br/> técnica e design disruptivo.</p>
                    <div className="social-links">
                        {/* Espaço para ícones sociais no futuro */}
                    </div>
                </div>

                {/* Coluna 2: Institucional / Carreira */}
                <div className="footer-section">
                    <h4>Ecossistema</h4>
                    <ul>
                        <li><Link to="/careers"><FaUsers className="icon" /> Trabalhe Conosco</Link></li>
                        <li><Link to="/contribute"><FaHandHoldingHeart className="icon" /> Contribua com o Projeto</Link></li>
                        <li><Link to="/about">Nossa História</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Suporte e Contato */}
                <div className="footer-section">
                    <h4>Canais de Dúvidas</h4>
                    <ul>
                        <li><a href="https://wa.me/seunumeroaqui" target="_blank" rel="noreferrer"><FaWhatsapp className="icon" /> Suporte pelo WhatsApp</a></li>
                        <li><a href="mailto:contato@exemplo.com"><FaEnvelope className="icon" /> E-mail Oficial</a></li>
                        <li><Link to="/faq">Perguntas Frequentes</Link></li>
                    </ul>
                </div>

                {/* Coluna 4: Legal / Transparência */}
                <div className="footer-section">
                    <h4>Transparência</h4>
                    <ul>
                        <li><Link to="/data-privacy"><FaShieldAlt className="icon" /> Tratamento de Dados</Link></li>
                        <li><Link to="/terms">Termos de Uso</Link></li>
                        <li><Link to="/cookies">Política de Cookies</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="bottom-content">
                    <p>&copy; 2026 CyberConnect. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}