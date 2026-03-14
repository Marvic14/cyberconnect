import "./Footer.scss";
import { Link } from "react-router-dom";
import Logo from "@/assets/img/ui/logo.webp"
import "./Footer.scss";
import { FaWhatsapp, FaEnvelope, FaShieldAlt, FaUsers, FaHandHoldingHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section brand">
                    <div className="footer-logo-div">
                    <img src={Logo} className="footer-logo" alt="Logo Marca da Cyber Connect - Somos uma divulgadora Afiliada ao Mercado Livre"/>
                    </div>
                    <p>Construindo o futuro da web com precisão<br/> técnica e design disruptivo.</p>
                    <div className="social-links">
                        {/* Espaço para ícones sociais no futuro */}
                    </div>
                </div>

                {/* Coluna 2: Institucional / Carreira */}
                <div className="footer-section">
                    <h4>Ecossistema</h4>
                    <ul>
                        <li><Link to="https://wa.me/17745143257?text=Olá,%20gostaria%20de%20fazer%20parte%20da%20equipe%20CyberConnect"><FaUsers className="icon" /> Trabalhe Conosco</Link></li>
                        <li><Link to="/contribute"><FaHandHoldingHeart className="icon" /> Contribua com o Projeto</Link></li>
                        <li><a href="https://wa.me/5511940162073?text=Ola%2C%20preciso%20de%20un%20WebSite" target="_blank" rel="noreferrer">Realizamos Criação de Sites</a></li>
                        <li><Link to="/about">Nossa História</Link></li>
                    </ul>
                </div>

                {/* Coluna 3: Suporte e Contato */}
                <div className="footer-section">
                    <h4>Canais de Dúvidas</h4>
                    <ul>
                        <li><a href="https://wa.me/5511940162073?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20ou%20algum%20aux%C3%ADlio." target="_blank" rel="noreferrer"><FaWhatsapp className="icon" /> Suporte pelo WhatsApp</a></li>
                        <li><a href="cyberconnection.business@gmail.com"><FaEnvelope className="icon" /> E-mail Oficial</a></li>
                        <li><Link to="/faq">Perguntas Frequentes</Link></li>
                    </ul>
                </div>

                {/* Coluna 4: Legal / Transparência */}
                <div className="footer-section">
                    <h4>Transparência</h4>
                    <ul>
                        <li><Link><FaShieldAlt className="icon"/> Tratamento de Dados</Link></li>
                        <li><Link to="/terms">Termos de Uso</Link></li>
                        <li><Link to="#">Política de Cookies</Link></li>
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