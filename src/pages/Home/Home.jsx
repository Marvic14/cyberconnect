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
import BaseFundo from "@/assets/img/ui/base-categories.png";
import LupaIcon from "@/assets/img/icons/icone-lupa.png";
import { FaSearchDollar } from "react-icons/fa";
import OffersIcon from "@/assets/img/icons/icone-oferta.png";
import { IoTicket } from "react-icons/io5";
import SuportIcon from "@/assets/img/icons/icon-suporte.png";
import { BiSupport } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";
import Eletronics from "@/assets/img/ui/eletronics.png";
import HomeKitchen from "@/assets/img/ui/home-kitchen.png";
import BeautyHealth from "@/assets/img/ui/Beautyhealth.png";
import Clothes from "@/assets/img/ui/clothes.png";
import Childrens from "@/assets/img/ui/Children's.png";
import MulherSectionWhatsApp from "@/assets/img/ui/Mulher-section-wpp 1.png";
import MockupWhatsApp from "@/assets/img/ui/mockup-section-whatsapp-home.png"

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
                <h2 className="subtitle-hero" id="confira-ofertas">Confira as ofertas <FaCartPlus/></h2>
            </main>
            <div className="neon-blue-line"></div>
            <section className="products">
                <section className="info-products">
                    <div className="div-title-products flex-row">
                        <h2 className="subtitle-products">Por que comprar conosco?</h2>
                        <div className="div-info-items flex-row">
                            <div className="div-icon-Information flex-row">
                                <div className="div-items flex-column">
                                    <MdSecurity color="orange" className="icon-security" alt="Compras 100% seguras e pagamentos diretamente nos canais oficiais  da Amazon"/>
                                    <h3>Segurança</h3>
                                </div>
                                <div className="div-items flex-column">
                                    <FaSearchDollar color="lightgreen" alt="Sempre Buscamos as melhores ofertas com monitoramento constante para você"/>
                                    <h3>Ofertas Ocultas</h3>
                                </div>
                                <div className="div-items flex-column">
                                    <IoTicket color="red" alt="Você terá acesso a cupons exclusivos por tempo limitados"/>
                                    <h3>Preços Baixo</h3>
                                </div>
                                <div className="div-items flex-column">
                                    <BiSupport color="#dddddd" alt="Suporte direto da Amazon e caso tenham alguma dúvida sobre nós, também auxiliamos no que puder"/>
                                    <h3>Suporte </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="neon-blue-line"></div>
                </section>
                <div className="precategoria">
                    <h2 className="subtitle-products"><span>Ofertas em Destaques</span> |  monitoramento frequente</h2>
                </div>
                <section className="categorias">
                    <div className="div-items-categorias flex-row">
                        <div className="div-item flex-column">
                            <div className="div-image-products">
                                <img src={Eletronics} alt=""/>
                            </div>
                            <h3>Eletrônicos</h3>
                            <div class="orange"></div>
                        </div>
                        <div className="div-item flex-column">
                            <div className="div-image-products">
                                <img src={HomeKitchen} alt=""/>
                            </div>
                            <h3>Casa e Cozinha</h3>
                            <div className="orange"></div>
                        </div>
                        <div className="div-item flex-column">
                            <div className="div-image-products">
                                <img src={BeautyHealth} alt=""/>
                            </div>
                            <h3>Belesa e Saúde</h3>
                            <div className="orange"></div>
                        </div>
                        <div className="div-item flex-column">
                            <div className="div-image-products">
                                <img src={Clothes} alt=""/>
                            </div>
                            <h3>Roupa e Acessório</h3>
                            <div className="orange"></div>
                        </div>
                        <div className="div-item flex-column">
                            <div className="div-image-products">
                                <img src={Childrens} alt=""/>
                            </div>
                            <h3>Infantil</h3>
                            <div className="orange"></div>
                        </div>
                    </div>
                    <div className="div-image">
                    <img src={BaseFundo} alt=""/>
                    </div>
                </section>
            </section>
            <div className="neon-blue-line"></div>
            <section className="section-whatsapp">
                <div className="div-image">
                    <img src={MulherSectionWhatsApp} alt="Mulher apontando para o whatsapp da CyberConnect"/>
                </div>
                <div className="infos-about-whatsapp-group">
                    <div className="text-principal">
                    <h2>Participe do nosso Grupo do WhatsApp</h2>
                    <h3>Mantenha-se sempre atualizado</h3>
                    </div>
                    <p>Postamos as melhores ofertas em tempo real</p>
                    <div className="button-div">
                        <button className="btn-whatsapp">
                            <div className="div-whatsapp-btn">
                                <img src={IconeWhatsApp} alt="Ícone do WhatsApp"/>
                            </div>
                            <span className="glow">Grupo</span><br/>
                            <span className="bolder">WhatsApp</span>
                        </button>
                    </div>
                </div>
                <div className="div-image">
                    <img src={MockupWhatsApp} alt="Mockup WhatsApp - Imagem de um celular exibindo o grupo da CyberConnect e as melhores ofertas"/>
                </div>
            </section>
            <div className="neon-blue-line"></div>
        </AnimatedPage>
    )
}