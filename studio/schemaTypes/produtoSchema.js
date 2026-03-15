export default {
    name: 'produto',
    type: 'document',
    title: 'Produtos CyberConnect',
    fields: [
        { name: 'nome', type: 'string', title: 'Nome do Produto', initialValue: `📦 ` },
        { name: 'linkAfiliado', type: 'url', title: 'Link de Afiliado' },
        { name: 'foto', type: 'image', title: 'Imagem do Produto', options: { hotspot: true } },
        { name: 'descricao', type: 'text', title: 'Descrição Curta', initialValue: `Clique em aproveitar a oferta para maiores informações sobre o produto.\nAtenção: As promoções podem sofrer variações.`},
        { name: "preco", type: "number", title: "Preço do produto" },
        {
            name: 'categoria',
            type: 'string',
            title: 'Categoria',
            options: {
                list: [
                    { title: 'Eletrônicos', value: 'eletronicos' },
                    { title: 'Casa e Cozinha', value: 'casa-e-cozinha' },
                    { title: 'Beleza e Saúde', value: 'beleza-e-saude' },
                    { title: 'Roupa e Acessório', value: 'roupa-e-acessorio' },
                    { title: 'Infantil', value: 'infantil' },
                ],
                layout: 'dropdown'
            },
            validation: Rule => Rule.required()
        }
    ]
}