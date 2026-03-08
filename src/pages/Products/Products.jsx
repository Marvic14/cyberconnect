import { useState, useEffect } from "react";
import { client } from "@/sanity";
import "./Products.scss";
import AnimatedPage from "@/components/AnimatedPage/AnimatedPage";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    // 1. Estado para controlar qual categoria está ativa
    const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
    const [termoBusca, setTermoBusca] = useState("");

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

    {/*}  // 2. Lógica de filtragem: Se for "todos", mostra tudo. Se não, filtra pela categoria.
    const produtosFiltrados = categoriaAtiva === "todos"
        ? products
        : products.filter(p => {
            // Verifica se a categoria existe e compara ignorando espaços/maiusculas
            return p.categoria?.trim().toLowerCase() === categoriaAtiva.trim().toLowerCase();
        });
*/}
    const produtosFiltrados = products.filter(p => {
        // 1. Filtro de Categoria (Igual ao que já temos)
        const bateCategoria = categoriaAtiva === "todos" || p.categoria === categoriaAtiva;

        // 2. Filtro de Busca "Contém" (Partial Match)
        const termo = termoBusca.toLowerCase().trim(); // Limpa espaços e padroniza

        // Pegamos o nome e a descrição do produto (caso exista)
        const nomeProduto = p.nome?.toLowerCase() || "";
        const descricaoProduto = p.descricao?.toLowerCase() || "";

        // O .includes() faz a mágica do "Contém"
        const bateBusca = nomeProduto.includes(termo) || descricaoProduto.includes(termo);

        return bateCategoria && bateBusca;
    });
    // Lista de categorias (deve bater com os 'value' que você colocou no Sanity)
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

                {/* 3. Barra de Filtros */}
                <nav className="filter-bar">
                    {categorias.map((cat) => (
                        <button
                            key={cat.value}
                            className={`filter-btn ${categoriaAtiva === cat.value ? 'ativado' : ''}`}
                            onClick={() => setCategoriaAtiva(cat.value)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </nav>
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Pesquisar ventiladores, fones..."
                        value={termoBusca}
                        onChange={(e) => setTermoBusca(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="products-grid">
                    {loading ? (
                        <p className="loading">Carregando catálogo...</p>
                    ) : produtosFiltrados.length > 0 ? (
                        // Se houver produtos, mostra eles
                        produtosFiltrados.map((item) => (
                            <ProductCard key={item._id} product={item} />
                        ))
                    ) : (
                        // Se a busca não retornar nada
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