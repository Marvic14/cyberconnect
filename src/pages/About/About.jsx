import "./About.scss";
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";
import RoboMascote from "@/assets/img/ui/robo-circular.webp"
import BandeiraBrasil from "@/assets/img/ui/bandeira-brasil.webp"

export default function About(){
    return (
        <AnimatedPage>
            <main className="about-page">
                <section className="quem-somos">
                    <div className="container">
                        <h1>Quem Somos</h1>
                        <div className="container-image">
                            <img src={RoboMascote} alt="Robo Mascote da CyberConnect"/>
                        </div>
                        <div className="conteudo-box">
                            <p>
                                Bem-vindo à <strong>Cyber Connect</strong>. Somos apaixonados por tecnologia e inovação.
                                Nosso objetivo é conectar você às melhores ofertas do mercado,
                                trazendo curadoria, transparência e qualidade em cada recomendação.
                            </p>
                            <p>
                                Acreditamos que a tecnologia deve ser acessível e facilitar o seu dia a dia.
                                Por isso, trabalhamos incansavelmente para filtrar o que há de melhor no ecossistema
                                do e-commerces nacional.<br/>Precisa de um site como este? Conheça nossos serviços de criação de e-commerce e landing pages em SP.
                            </p>

                            <div className="div-image">
                                <img src={BandeiraBrasil} alt="bandeira do Brasil - Nossos negócios atualmente se concentram fortemente no Brasil"/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AnimatedPage>
    )
}