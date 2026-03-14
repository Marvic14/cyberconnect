import { useState, useEffect } from "react";
import { client } from "@/sanity";
import "./Products.scss";
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";
import ProductCard from "@/components/ProductCard/ProductCard";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Products() {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
    const [termoBusca, setTermoBusca] = useState("");
    const [menuAberto, setMenuAberto] = useState(false);

    // 1. URL Sync: Muito mais simples agora!
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const catDaURL = params.get("categoria");

        if (catDaURL) {
            // Como o valor na URL (ex: casa-e-cozinha) agora é igual ao value do Sanity,
            // não precisamos mais do objeto tradutor.
            setCategoriaAtiva(catDaURL.toLowerCase());
        } else {
            setCategoriaAtiva("todos");
        }
    }, [location]);

    useEffect(() => {
        const query = `*[_type == "produto"]{
            _id, nome, preco, "imageUrl": foto.asset->url, linkAfiliado, descricao, categoria
        }`;

        client.fetch(query)
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erro ao carregar produtos:", err);
                setLoading(false);
            });
    }, []);

    // --- LÓGICA DE FILTRAGEM LIMPA ---
    const termo = termoBusca.toLowerCase().trim();

    const resultadosNaCategoria = products.filter(p => {
        // Comparação direta: Ambos são técnicos (ex: eletronicos === eletronicos)
        const bateCategoria = categoriaAtiva === "todos" || p.categoria === categoriaAtiva;

        const nomeProduto = p.nome?.toLowerCase() || "";
        const descricaoProduto = p.descricao?.toLowerCase() || "";
        const bateBusca = nomeProduto.includes(termo) || descricaoProduto.includes(termo);

        return bateCategoria && bateBusca;
    });

    const buscaFalhouNaCategoria = termo.length > 0 && resultadosNaCategoria.length === 0 && categoriaAtiva !== "todos";

    const produtosFiltrados = buscaFalhouNaCategoria
        ? products.filter(p => {
            const nomeProduto = p.nome?.toLowerCase() || "";
            const descricaoProduto = p.descricao?.toLowerCase() || "";
            return nomeProduto.includes(termo) || descricaoProduto.includes(termo);
        })
        : resultadosNaCategoria;

    const categorias = [
        { label: "Todos", value: "todos" },
        { label: "Eletrônicos", value: "eletronicos" },
        { label: "Casa e Cozinha", value: "casa-e-cozinha" },
        { label: "Beleza e Saúde", value: "beleza-e-saude" },
        { label: "Roupa e Acessório", value: "roupa-e-acessorio" }, // Atualizado!
        { label: "Infantil", value: "infantil" }
    ];

    return (
        <AnimatedPage>
            <main className="products-page">
                <h1 className="title-products"><span>Vitrine</span> de Ofertas</h1>
                <p className="observation"><span>Atenção: Todas as compras</span> são feitas diretamente no mercado livre.<br/>Somos apenas divulgadores parceiros</p>
                <br/>

                <div className={`filter-wrapper ${menuAberto ? 'aberto' : ''}`}>
                    <button className="mobile-filter-toggle" onClick={() => setMenuAberto(!menuAberto)}>
                        Filtrar por Categoria
                        <span className="icon-arrow"></span>
                    </button>

                    <nav className="filter-bar">
                        {categorias.map((cat) => (
                            <label key={cat.value} className="filter-item">
                                <input
                                    type="checkbox"
                                    checked={categoriaAtiva === cat.value}
                                    onChange={() => {
                                        setCategoriaAtiva(cat.value);
                                        if (window.innerWidth < 768) setMenuAberto(false);
                                    }}
                                />
                                <span className="custom-checkbox"></span>
                                {cat.label}
                            </label>
                        ))}
                    </nav>
                </div>

                <div className="search-container">
                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Pesquisar ventiladores, fones..."
                            value={termoBusca}
                            onChange={(e) => setTermoBusca(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="products-grid">
                    {loading ? (
                        <p className="loading">Carregando catálogo...</p>
                    ) : produtosFiltrados.length > 0 ? (
                        produtosFiltrados.map((item) => (
                            <ProductCard key={item._id} product={item} />
                        ))
                    ) : (
                        <div className="no-results">
                            <p className="notFound">Nenhum produto encontrado para o termo: "{termoBusca}".</p>
                            <button onClick={() => setTermoBusca("")} className="clear-search">
                                Limpar busca
                            </button>
                        </div>
                    )}
                </div>
            </main>
        </AnimatedPage>
    );
}