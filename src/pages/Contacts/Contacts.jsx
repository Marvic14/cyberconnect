import "./Contacts.scss";
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";

export default function Contacts(){
    return (
        <AnimatedPage>
            <main className="contacts-page">
                <section className="contatos">
                    <div className="container">
                        <h1>Canais de Atendimento</h1>
                        <p className="subtitle">Conecte-se conosco em nossas redes sociais</p>

                        <div className="contatos-grid">
                            <a href="https://wa.me/SEUNUMERO" target="_blank" className="card-contato whatsapp">
                                <div className="icon-box">
                                    <i className="fab fa-whatsapp"></i>
                                </div>
                                <h3>WhatsApp</h3>
                                <p>Tire dúvidas e receba ofertas direto no celular.</p>
                                <span className="btn-link">Chamar Agora</span>
                            </a>

                            <a href="https://instagram.com/SEU_USER" target="_blank" className="card-contato instagram">
                                <div className="icon-box">
                                    <i className="fab fa-instagram"></i>
                                </div>
                                <h3>Instagram</h3>
                                <p>Acompanhe nossos stories e novidades diárias.</p>
                                <span className="btn-link">Seguir</span>
                            </a>

                            <a href="https://tiktok.com/@SEU_USER" target="_blank" className="card-contato tiktok">
                                <div className="icon-box">
                                    <i className="fab fa-tiktok"></i>
                                </div>
                                <h3>TikTok</h3>
                                <p>Vídeos rápidos dos melhores achadinhos.</p>
                                <span className="btn-link">Assistir</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </AnimatedPage>
    )
}