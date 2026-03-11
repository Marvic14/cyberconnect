import "./Home.scss";
import "@/components/Swiper/CategoriaCarousel.scss"
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";
import DescontoPropaganda from "@/assets/img/ui/desconto-exclusivo-image.webP";
import BestSellerPropaganda from "@/assets/img/ui/Best-Sellers-image.webP";
import EntregaPropaganda from "@/assets/img/ui/EntregaGarantida.webP";
import ImageNotebook from "@/assets/img/ui/Notebook-marketing-image.webp";
import RoboMascoteGift from "@/assets/img/ui/Robô-Com-Presentes.webp";
import IconeWhatsApp from "@/assets/img/icons/WhatsApp.webp";
import BaseFundo from "@/assets/img/ui/base-categories.webp";
import Security from "@/assets/img/ui/icon-security.svg";
import LupaIcon from "@/assets/img/ui/lupa2.svg";
import OffersIcon from "@/assets/img/ui/cupons.webp";
import SuportIcon from "@/assets/img/ui/suporte.webp";
import { FaCartPlus } from "react-icons/fa";
import Eletronics from "@/assets/img/ui/eletronics.webp";
import HomeKitchen from "@/assets/img/ui/home-kitchen.webp";
import BeautyHealth from "@/assets/img/ui/Beautyhealth.webp";
import Clothes from "@/assets/img/ui/clothes.webp";
import Childrens from "@/assets/img/ui/Children's.webp";
import MulherSectionWhatsApp from "@/assets/img/ui/Mulher-section-wpp 1.webp";
import MockupWhatsApp from "@/assets/img/ui/mockup-section-whatsapp-home.webp";
import FaixaEspecial from "@/assets/img/ui/faixa-especial.webp";
import { CategoriaCarousel } from "@/components/Swiper/CategoriaCarousel.jsx";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import MercadoLivre from "@/assets/img/ui/mercadoLivre.webp"


export default function Home() {
    const isDesktop = useMediaQuery('(min-width: 781px)');

    const categorias = [
        { img: Eletronics, titulo: 'Eletrônicos' },
        { img: HomeKitchen, titulo: 'Casa e Cozinha' },
        { img: BeautyHealth, titulo: 'Belesa e Saúde' },
        { img: Clothes, titulo: 'Roupa e Acessório' },
        { img: Childrens, titulo: 'Infantil' },
    ];

    return (
        <AnimatedPage>
            <main className="home-page container-section">
                <div className="container-hero-content">
                    <div className="div-hero-content">
                        <div className="div-hero-text">
                            <h1 className="title">Melhores Ofertas</h1>
                            <div style={{ display: "flex", gap: "20px" }}>
                                <span className="bolder">Do</span>
                                <div className="container-image">
                                <img src={MercadoLivre} alt="Logo da Amazon" className="logoAmazon" />
                                </div>
                            </div>
                            <h2 className="subtitle-hero">Selectionadas para você</h2>
                        </div>
                    </div>
                    <div className="hero-image" id="computer">
                        <div className="container-image">
                            <img src={ImageNotebook} alt="Notebook gamer" className="notebookVeloz" />
                        </div>
                    </div>
                    <div className="hero-image" id="mascote-CyberConnect">
                        <div className="container-image">
                            <img src={RoboMascoteGift} alt="Mascote Cyber Connect" className="bot-gift" />
                        </div>
                    </div>
                </div>
                <div id="flex-row-propagandas-image">
                    <div className="div-propaganda"><img src={DescontoPropaganda} alt="Descontos" /></div>
                    <div className="div-propaganda"><img src={BestSellerPropaganda} alt="Best Sellers" /></div>
                    <div className="div-propaganda" id="propaganda-master"><img src={EntregaPropaganda} alt="Segurança" /></div>
                </div>
                <h2 className="subtitle-hero" id="confira-ofertas">Confira as ofertas <FaCartPlus /></h2>
            </main>

            <div className="neon-blue-line"></div>

            <section className="products">
                <section className="info-products">
                    <div className="div-title-products">
                        <h2 className="subtitle-products">Por que comprar conosco?</h2>
                        <div className="div-info-items">
                            <div className="div-icon-Information">
                                <div className="div-items">
                                    <div className="div-image"><img src={Security} alt="Segurança" /></div>
                                    <h3>Segurança</h3>
                                </div>
                                <div className="div-items">
                                    <div className="div-image"><img src={LupaIcon} alt="Ofertas" /></div>
                                    <h3>Ofertas Ocultas</h3>
                                </div>
                                <div className="div-items">
                                    <div className="div-image"><img src={OffersIcon} alt="Preços" /></div>
                                    <h3>Preços Baixo</h3>
                                </div>
                                <div className="div-items">
                                    <div className="div-image"><img src={SuportIcon} alt="Suporte" /></div>
                                    <h3>Suporte</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="neon-blue-line" id="neon-desativado-mobile"></div>
                </section>

                <div className="precategoria">
                    <h2 className="subtitle-products"><span>Ofertas em Destaques</span> | monitoramento frequente</h2>
                </div>

                <section className="categorias">
                    {isDesktop ? (
                        <div className="div-items-categorias">
                            {categorias.map((cat, index) => (
                                <div className="div-item" key={index}>
                                    <div className="div-image-products">
                                        <img src={cat.img} alt={cat.titulo} height={120} width={123}  loading="lazy"/>
                                    </div>
                                    <h3>{cat.titulo}</h3>
                                    <div className="orange"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <CategoriaCarousel itens={categorias} />
                    )}
                    <div className="div-image" id="baseFundo">
                        <img src={BaseFundo} alt="Fundo das categorias" />
                    </div>
                </section>
            </section>

            <div className="neon-blue-line"></div>

            <section className="section-whatsapp">
                <div className="div-image-woman">
                    <img src={MulherSectionWhatsApp} alt="Mulher" id="mulher" />
                </div>
                <div className="infos-about-whatsapp-group">
                    <div className="text-principal">
                        <h2>Participe do nosso Grupo do WhatsApp</h2>
                        <h3>Mantenha-se sempre atualizado</h3>
                    </div>
                    <p>Postamos algumas ofertas apenas no grupo</p>
                    <div className="div-image">
                        <img src={FaixaEspecial} alt="" />
                    </div>
                    <div className="button-div">
                        <button className="btn-whatsapp">
                            <div className="div-whatsapp-btn"><img src={IconeWhatsApp} alt="Icone WhatsApp" /></div>
                            <span className="glow">Grupo</span><br />
                            <span className="bolder">WhatsApp</span>
                        </button>
                    </div>
                </div>
                <div className="div-image"><img src={MockupWhatsApp} alt="Mockup" /></div>
            </section>
            <div className="neon-blue-line"></div>
        </AnimatedPage>
    );
}