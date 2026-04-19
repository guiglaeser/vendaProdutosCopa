let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarCarrinho() {
    localStorage.setItem('carrinho', stringify(carrinho));
}

let produtos = [
    {
        id: 1,
        nome: "Álbum de Figurinhas",
        descricao: "Álbum de figurinhas da Copa do Mundo 2026 - Capa Dura Ouro",
        estoque: 2000,
        categoria: "album",
        preco: 79.90,
        ativo: true
    },

    {
        id: 2,
        nome: "Brasil",
        descricao: "Camisa da Seleção Brasileira",
        tamanho: ['P', 'M', 'G', 'GG'],
        estoque: 15000,
        preco: 459.90,
        categoria: "camisa",
        ativo: true
    },

    {
        id: 3,
        nome: "Uruguai",
        descricao: "Camisa da Seleção do Uruguai",
        tamanho: ['P', 'M', 'G', 'GG', 'G1'],
        estoque: 20000,
        ativo: true,
        preco: 257.99,
        categoria: "camisa"
    },

    {
        id: 4,
        nome: "Argentina",
        descricao: "Camisa da Seleção Argentina",
        tamanho: ['P', 'M', 'G', 'GG', 'G1', 'G2'],
        ativo: true,
        preco: 349.90,
        estoque: 3000,
        categoria: "camisa"
    },

    {
        id: 5,
        nome: "Alemanha",
        descricao: "Camisa 2 da Seleção Alemã",
        tamanho: ['P', 'M', 'G', 'GG'],
        ativo: true,
        estoque: 20000,
        preco: 489.90,
        categoria: "camisa"
    },

    {
        id: 6,
        nome: "Espanha",
        descricao: "Camisa da Seleção Espanhola",
        tamanho: ['P', 'M', 'G'],
        ativo: true,
        preco: 280.78,
        categoria: "camisa",
        estoque: 3000
    },

    {
        id: 7,
        nome: "EUA",
        descricao: "Camisa da Seleção Americana",
        tamanho: ['P', 'M', 'G'],
        ativo: true,
        preco: 349.99,
        categoria: "camisa",
        estoque: 4000
    },

    {
        id: 8,
        nome: "Itália",
        descricao: "Camisa da Seleção Italiana",
        tamanho: ['P', 'M', 'G', 'GG'],
        ativo: true,
        preco: 459.99,
        categoria: "camisa",
        estoque: 10000
    },

    {
        id: 9,
        nome: "Japão",
        descricao: "Camisa da Seleção Japonesa",
        tamanho: ['P', 'M'],
        ativo: true,
        preco: 349.90,
        categoria: "camisa",
        estoque: 2000
    },

    {
        id: 10,
        nome: "México",
        descricao: "Camisa da Seleção Mexicana",
        tamanho: ['P', 'M', 'G'],
        ativo: true,
        preco: 329.90,
        categoria: "camisa",
        estoque: 1450
    },

    {
        id: 11,
        nome: "Portugal",
        descricao: "Camisa da Seleção Portuguesa",
        tamanho: ['P', 'M', 'G', 'GG'],
        ativo: true,
        preco: 299.99,
        categoria: "camisa",
        estoque: 4000
    },

    {
        id: 12,
        nome: "Inglaterra",
        descricao: "Camisa da Seleção Inglesa",
        tamanho: ['P', 'M', 'G'],
        ativo: true,
        preco: 359.99,
        categoria: "camisa",
        estoque: 5000
    }
    
];



function renderizarProdutos() {
    const container = document.getElementById('visualizacao');
    
    if (!container) return;

    container.innerHTML = '';
    
    produtos.forEach (produto => {
        
        if(!produto.ativo) return;

        const produtoHTML = `
        <section class="produto">
                <article class="card">
                <div class="card_header">
                        <header>
                            <h2>${produto.nome}</h2>
                            </header>
                            </div>
                            <div class="card_image">
                            <img src="assets/img/${getImagePorNome(produto.nome)}" alt="${produto.nome}">
                            </div>
                            <div class="card_description">
                            <div class="card_description_header">
                            <h4>Descrição:</h4>
                            </div>
                        <div class="card_description_body">
                            <p>${produto.descricao}</p>
                            ${produto.tamanho ? `<p><b>Tamanhos:</b> ${produto.tamanho.join(', ')}</p>` : ''}
                        </div>
                        </div>

                        <div class="card_footer">
                        <div class="card_price">
                            <span><h2><b>R$ ${produto.preco.toFixed(2).replace('.', ',')}</b></h2></span>
                            </div>
                        <div class="actions">
                        <button class="actions" onclick="comprar(${produto.id})">
                                Comprar
                                </button>
                                <button class="actions" onclick="adicionarAoCarrinho(${produto.id})">
                                Adicionar ao carrinho
                                </button>
                                </div>
                                </div>
                                </article>
            </section>
        `;

        container.innerHTML += produtoHTML;
    });
}

function getImagePorNome(nome) {
    const images = {
        'Álbum de Figurinhas': 'album_capa_dura.webp',
        'Brasil': 'camisaBrasil.avif',
        'Uruguai': 'camisaUruguai.png',
        'Argentina': 'camisaArgentina.avif',
        'Alemanha': 'camisaAlemanha.avif',
        'Espanha': 'camisaEspanha.avif',
        'EUA': 'camisaEUA.avif',
        'Itália': 'camisaItalia.jpg',
        'Japão': 'camisaJapan.avif',
        'México': 'camisaMexico.avif',
        'Portugal': 'camisaPortugal.avif',
        'Inglaterra': 'camisaInglaterra.avif'
    };

    return images[nome] || 'placeholder.jpg';
}

document.addEventListener('DOMContentLoaded', function() {
    renderizarProdutos();
})


function comprar() {
    Swal.fire ({
        title: 'Perfeito!',
        text: 'Preparando tudo para sua compra...',
        icon: 'success',
    })
    setTimeout(() => {
        window.location.href='finalizacaoCompra.html';
    }, 1500);
}

function adicionarAoCarrinho(idProduto) {
    let produtoEncontrado = false;

    for(let i=0;i<produtos.length;i++) {
        if(parseInt(idProduto)==produtos[i].id && produtos[i].estoque > 0 && produtos[i].ativo==true) {
            produtoEncontrado = true;
            carrinho.push(produtos[i]);
            Swal.fire ({
                title: 'Produto adicionado!',
                text: 'Produto adicionado com sucesso.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1000
            }).then(() => {
                
                Swal.fire ({
                        title: 'O que desejas fazer?',
                        text: '',
                        showCancelButton: true,
                        confirmButtonText: 'Continuar comprando',
                        cancelButtonText: 'Ir para o carrinho',
                        confirmButtonColor: 'rgb(0, 168, 0)',
                        cancelButtonColor: 'rgb(0, 150, 0)'
                    }).then((result) => {
                        if(!result.isConfirmed) {
                            window.location.href='carrinho.html';
                        }
                    })
            })
            break;
        }
    }

    if(!produtoEncontrado){
        Swal.fire ({
            title: 'Erro!',
            text: 'Produto fora de estoque ou inativo.',
            icon: 'error'
        });
    }
}

/* function produtosCarrinho() {
    const produtoHTML = '';

    if(carrinho.length==0) {
        avisoHTML = `
            <div class="container" id="carrinho">
                <div class="aviso">
                    <h4>Você não possui produtos em seu carrinho!</h4>
                </div>
                <div class="carrinhoAction">
                    <button onclick=window.location.href='produtos.html'">Voltar a comprar</button>
                </div.
            </div>
        `;
    } else {
        for(let i=0;i<carrinho.length;i++) {
            let cardHTML = `

        `;

        produtoHTML += cardHTML;
        }
    }
} */

function limparCarrinho() {
    carrinho = [];
}