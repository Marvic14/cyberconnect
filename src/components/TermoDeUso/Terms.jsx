import React from 'react';
import './Terms.scss';

export default function Terms() {
    return (
        <main className="terms-container">
            <section className="terms-content">
                <h1>Termos de Uso</h1>
                <p className="last-update">Última atualização: Março de 2026</p>

                <div className="alert-box">
                    <strong>Aviso Importante:</strong> A Cyber Connect é uma marca de afiliados. Não somos fornecedores, fabricantes ou vendedores diretos dos produtos anunciados.
                </div>

                <div className="terms-section">
                    <h2>1. Natureza do Serviço</h2>
                    <p>
                        A Cyber Connect atua exclusivamente como uma plataforma de curadoria e divulgação de ofertas.
                        Nosso trabalho consiste em selecionar produtos de lojas parceiras (como Amazon e Mercado Livre)
                        e facilitar o acesso do usuário a essas promoções através de links de afiliados.
                    </p>
                </div>

                <div className="terms-section">
                    <h2>2. Isenção de Responsabilidade</h2>
                    <p>
                        Ao utilizar nosso site, você declara estar ciente de que:
                    </p>
                    <ul>
                        <li><strong>Vendas e Pagamentos:</strong> Toda a transação comercial ocorre fora do ambiente da Cyber Connect. Não processamos pagamentos e não temos acesso aos seus dados financeiros.</li>
                        <li><strong>Logística e Entrega:</strong> A responsabilidade pelo envio, prazo e integridade do produto é integralmente da loja parceira onde a compra foi concluída.</li>
                        <li><strong>Garantia:</strong> Questões de suporte, troca ou devolução devem ser tratadas diretamente com o fornecedor oficial do produto.</li>
                    </ul>
                </div>

                <div className="terms-section">
                    <h2>3. Precisão de Informações</h2>
                    <p>
                        Embora busquemos manter os preços e estoques atualizados, os valores válidos são sempre os exibidos no carrinho de compras da loja parceira no momento da finalização do pedido.
                    </p>
                </div>

                <div className="footer-notice">
                    <p>Ao navegar na Cyber Connect, você concorda com estes termos.</p>
                </div>
            </section>
        </main>
    );
}