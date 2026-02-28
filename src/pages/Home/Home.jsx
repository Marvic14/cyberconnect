import "./Home.scss";
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";
import LogoAmazon from "@/assets/img/ui/Amazon3.png";
import DescontoPropaganda from "@/assets/img/ui/desconto-exclusivo-image.webP"
import BestSellerPropaganda from "@/assets/img/ui/Best-Sellers-image.webP"
import EntregaPropaganda from "@/assets/img/ui/EntregaGarantida.webP"
import ImageNotebook  from "@/assets/img/ui/Notebook-marketing-image.png";
import RoboMascoteGift from "@/assets/img/ui/Robô-Com-Presentes.png"
import IconeWhatsApp from "@/assets/img/icons/WhatsApp.webp"
import { MdSecurity } from "react-icons/md";


import LupaIcon from "@/assets/img/icons/icone-lupa.png";
import { FaSearchDollar } from "react-icons/fa";

import OffersIcon from "@/assets/img/icons/icone-oferta.png";
import { IoTicket } from "react-icons/io5";

import SuportIcon from "@/assets/img/icons/icon-suporte.png";
import { BiSupport } from "react-icons/bi";


export default function Home(){
    return (
        <AnimatedPage>
            <main className="home-page container-section">
                <div className="flex-row">
                    <div className="div-hero-content">
                        <div className="div-hero-text">
                            <h1 className="title">Melhores Ofertas</h1>
                            <div style={{display: "flex", gap: "20px"}}>
                            <span className="bolder">Da</span>
                            <img src={LogoAmazon} alt="Logo da Amazon abaixo do título principal" className="logoAmazon"/>
                            </div>
                            <h2 className="subtitle-hero">Selectionadas para você</h2>
                        </div>
                    </div>

                    <div className="hero-image" id="computer">
                            <div className="container-image">
                                <img src={ImageNotebook} alt="Imagem de propaganda de um notebook gamer e ultra veloz" className="notebookVeloz"/>
                            </div>
                    </div>

                    <div className="hero-image" id="mascote-CyberConnect">
                        <div className="container-image">
                            <img src={RoboMascoteGift} alt="Mascote da Cyber Connect, segurando seu presente!" className="bot-gift"/>
                        </div>
                    </div>
                </div>
                <div id="flex-row-propagandas-image">
                    <div className="div-propaganda">
                    <img src={DescontoPropaganda} alt="Descontos Exclusivos por meio dos nossos links parceiros"/>
                    </div>
                    <div className="div-propaganda">
                    <img src={BestSellerPropaganda} alt="Produtos Best Sellers - Os melhores e mais procurados da Amazon"/>
                    </div>
                    <div className="div-propaganda" id="propaganda-master">
                    <img src={EntregaPropaganda} alt="As compras, bem como as entregas são diretos pelos canais oficiais da Amazon, segurança total"/>
                    </div>
                </div>
                <h2 className="subtitle-hero" id="confira-ofertas">Selectionadas para você <img src={IconeWhatsApp} alt="Ícone do WhatsApp"/></h2>
            </main>
            <section className="products">
                <section className="info-products">
                    <div className="div-title-products flex-row">
                        <h2 className="subtitle-products">Por que comprar conosco?</h2>
                        <div className="div-info-items flex-row">
                                <div className="div-icon-Information flex-row">
                                    <div className="div-items flex-column">
                                        <MdSecurity alt="Compras 100% seguras e pagamentos diretamente nos canais oficiais  da Amazon"/>
                                        <h3>Segurança</h3>
                                    </div>
                                    <div className="div-items flex-column">
                                            <FaSearchDollar alt="Sempre Buscamos as melhores ofertas com monitoramento constante para você"/>
                                        <h3>Ofertas Ocultas</h3>
                                    </div>
                                    <div className="div-items flex-column">
                                            <IoTicket alt="Você terá acesso a cupons exclusivos por tempo limitados"/>
                                        <h3>Preços Baixo</h3>
                                    </div>
                                    <div className="div-items flex-column">
                                            <BiSupport alt="Suporte direto da Amazon e caso tenham alguma dúvida sobre nós, também auxiliamos no que puder"/>
                                        <h3>Suporte </h3>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>


            </section>
        </AnimatedPage>
    )
}