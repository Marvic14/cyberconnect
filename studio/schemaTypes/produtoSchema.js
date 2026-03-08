export default {
    name: 'produto',
    type: 'document',
    title: 'Produtos CyberConnect',
    fields: [
        { name: 'nome', type: 'string', title: 'Nome do Produto' },
        { name: 'linkAfiliado', type: 'url', title: 'Link de Afiliado' },
        { name: 'foto', type: 'image', title: 'Imagem do Produto', options: { hotspot: true } },
        { name: 'descricao', type: 'text', title: 'Descrição Curta' },
        { name: "preco", type: "number", title: "Preço do produto" },
        {
            name: 'categoria',
            type: 'string',
            title: 'Categoria',
            options: {
                list: [
                    { title: 'Eletrônicos', value: 'eletronicos' },
                    { title: 'Casa e Cozinha', value: 'casa-cozinha' },
                    { title: 'Beleza e Saúde', value: 'beleza-saude' },
                    { title: 'Acessórios', value: 'acessorios' },
                    { title: 'Infantil', value: 'infantil' },
                ],
                layout: 'dropdown' // Facilita a escolha no painel
            },
            validation: Rule => Rule.required() // Garante que nenhum produto fique sem categoria
        }
    ]
}