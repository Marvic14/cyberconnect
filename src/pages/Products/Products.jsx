import { useState, useEffect } from "react";
import { client } from "@/sanity";
import "./Products.scss";
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";
import ProductCard from "@/components/ProductCard/ProductCard";
import { FaSearch } from "react-icons/fa";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
    const [termoBusca, setTermoBusca] = useState("");
    const [menuAberto, setMenuAberto] = useState(false); // Estado movido para o local correto

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

    const produtosFiltrados = products.filter(p => {
        // 1. Filtro de Categoria
        const bateCategoria = categoriaAtiva === "todos" || p.categoria === categoriaAtiva;

        // 2. Filtro de Busca
        const termo = termoBusca.toLowerCase().trim();
        const nomeProduto = p.nome?.toLowerCase() || "";
        const descricaoProduto = p.descricao?.toLowerCase() || "";
        const bateBusca = nomeProduto.includes(termo) || descricaoProduto.includes(termo);

        return bateCategoria && bateBusca;
    });

    const categorias = [
        { label: "Todos", value: "todos" },
        { label: "Eletrônicos", value: "eletronicos" },
        { label: "Casa", value: "casa-cozinha" },
        { label: "Beleza", value: "beleza-saude" },
        { label: "Acessórios", value: "acessorios" }
    ];

    return (
        <AnimatedPage>
            <main className="products-page">
                <h1 className="title-products">Vitrine de Ofertas</h1>

                {/* Estrutura do Filtro Adaptada para Desktop e Mobile */}
                <div className={`filter-wrapper ${menuAberto ? 'aberto' : ''}`}>
                    <button
                        className="mobile-filter-toggle"
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
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
                                        // Fecha o menu no mobile após selecionar
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