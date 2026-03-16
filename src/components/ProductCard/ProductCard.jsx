// src/components/ProductCard/ProductCard.jsx
import ReactGA from "react-ga4";


export default function ProductCard({ product }) {
    // 2. Cria a função que avisa o Google sobre o clique
    const trackClick = () => {
        ReactGA.event({
            category: "Conversão Afiliado",
            action: "Clique Botão Oferta",
            label: product.nome, // Registra qual produto foi clicado
        });
    };
    return (
        <article className="product-card"> {/* SEU ESTILO GRUDA AQUI */}
            <div className="container-image">
                <img
                    src={`${product.imageUrl}?w=400&q=85&auto=format`}
                    alt={product.nome}
                    loading="lazy"
                />
            </div>

            <div className="nome-preco">
                <h3 className="product-name">{product.nome}</h3>
                <p className="product-price">
                    {product.preco ? product.preco.toLocaleString("pt-BR", {
                        style: "currency", currency: "BRL"
                    }) : "Consultar"}
                </p>
            </div>

            <p className="product-description">{product.descricao}</p>

            <a
                className="offer-button"
                href={product.linkAfiliado}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackClick}
            >
                Aproveitar Oferta
            </a>
        </article>
    );
}