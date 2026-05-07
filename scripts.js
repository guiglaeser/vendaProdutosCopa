let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

var produtos = [
  {
    id: 1,
    nome: "Álbum de Figurinhas",
    descricao: "Álbum de figurinhas da Copa do Mundo 2026 - Capa Dura Ouro",
    estoque: 2000,
    categoria: "album",
    preco: 79.9,
    ativo: true,
    quantidade: 0
  },
  // Brasil
  { id: 2, nome: "Brasil", descricao: "Camisa da Seleção Brasileira - P", tamanho: "P", estoque: 15000, preco: 389.9, categoria: "camisa", ativo: true, quantidade: 0 },
  { id: 2, nome: "Brasil", descricao: "Camisa da Seleção Brasileira - M", tamanho: "M", estoque: 15000, preco: 419.9, categoria: "camisa", ativo: true, quantidade: 0 },
  { id: 2, nome: "Brasil", descricao: "Camisa da Seleção Brasileira - G", tamanho: "G", estoque: 15000, preco: 439.9, categoria: "camisa", ativo: true, quantidade: 0 },
  { id: 2, nome: "Brasil", descricao: "Camisa da Seleção Brasileira - GG", tamanho: "GG", estoque: 15000, preco: 459.9, categoria: "camisa", ativo: true, quantidade: 0 },

  // Uruguai
  { id: 3, nome: "Uruguai", descricao: "Camisa da Seleção do Uruguai - P", tamanho: "P", estoque: 20000, ativo: true, preco: 170.99, categoria: "camisa", quantidade: 0 },
  { id: 3, nome: "Uruguai", descricao: "Camisa da Seleção do Uruguai - M", tamanho: "M", estoque: 20000, ativo: true, preco: 207.99, categoria: "camisa", quantidade: 0 },
  { id: 3, nome: "Uruguai", descricao: "Camisa da Seleção do Uruguai - G", tamanho: "G", estoque: 20000, ativo: true, preco: 237.99, categoria: "camisa", quantidade: 0 },
  { id: 3, nome: "Uruguai", descricao: "Camisa da Seleção do Uruguai - GG", tamanho: "GG", estoque: 20000, ativo: true, preco: 267.99, categoria: "camisa", quantidade: 0 },
  { id: 3, nome: "Uruguai", descricao: "Camisa da Seleção do Uruguai - G1", tamanho: "G1", estoque: 20000, ativo: true, preco: 287.99, categoria: "camisa", quantidade: 0 },

  // Argentina
  { id: 4, nome: "Argentina", descricao: "Camisa da Seleção Argentina - P", tamanho: "P", ativo: true, preco: 249.9, estoque: 3000, categoria: "camisa", quantidade: 0 },
  { id: 4, nome: "Argentina", descricao: "Camisa da Seleção Argentina - M", tamanho: "M", ativo: true, preco: 269.9, estoque: 3000, categoria: "camisa", quantidade: 0 },
  { id: 4, nome: "Argentina", descricao: "Camisa da Seleção Argentina - G", tamanho: "G", ativo: true, preco: 299.9, estoque: 3000, categoria: "camisa", quantidade: 0 },
  { id: 4, nome: "Argentina", descricao: "Camisa da Seleção Argentina - GG", tamanho: "GG", ativo: true, preco: 319.9, estoque: 3000, categoria: "camisa", quantidade: 0 },
  { id: 4, nome: "Argentina", descricao: "Camisa da Seleção Argentina - G1", tamanho: "G1", ativo: true, preco: 349.9, estoque: 3000, categoria: "camisa", quantidade: 0 },
  { id: 4, nome: "Argentina", descricao: "Camisa da Seleção Argentina - G2", tamanho: "G2", ativo: true, preco: 369.9, estoque: 3000, categoria: "camisa", quantidade: 0 },

  // Alemanha
  { id: 5, nome: "Alemanha", descricao: "Camisa 2 da Seleção Alemã - P", tamanho: "P", ativo: true, estoque: 20000, preco: 489.9, categoria: "camisa", quantidade: 0 },
  { id: 5, nome: "Alemanha", descricao: "Camisa 2 da Seleção Alemã - M", tamanho: "M", ativo: true, estoque: 20000, preco: 489.9, categoria: "camisa", quantidade: 0 },
  { id: 5, nome: "Alemanha", descricao: "Camisa 2 da Seleção Alemã - G", tamanho: "G", ativo: true, estoque: 20000, preco: 489.9, categoria: "camisa", quantidade: 0 },
  { id: 5, nome: "Alemanha", descricao: "Camisa 2 da Seleção Alemã - GG", tamanho: "GG", ativo: true, estoque: 20000, preco: 489.9, categoria: "camisa", quantidade: 0 },

  // Espanha
  { id: 6, nome: "Espanha", descricao: "Camisa da Seleção Espanhola - P", tamanho: "P", ativo: true, preco: 280.78, categoria: "camisa", estoque: 3000, quantidade: 0 },
  { id: 6, nome: "Espanha", descricao: "Camisa da Seleção Espanhola - M", tamanho: "M", ativo: true, preco: 280.78, categoria: "camisa", estoque: 3000, quantidade: 0 },
  { id: 6, nome: "Espanha", descricao: "Camisa da Seleção Espanhola - G", tamanho: "G", ativo: true, preco: 280.78, categoria: "camisa", estoque: 3000, quantidade: 0 },

  // EUA
  { id: 7, nome: "EUA", descricao: "Camisa da Seleção Americana - P", tamanho: "P", ativo: true, preco: 349.99, categoria: "camisa", estoque: 4000, quantidade: 0 },
  { id: 7, nome: "EUA", descricao: "Camisa da Seleção Americana - M", tamanho: "M", ativo: true, preco: 349.99, categoria: "camisa", estoque: 4000, quantidade: 0 },
  { id: 7, nome: "EUA", descricao: "Camisa da Seleção Americana - G", tamanho: "G", ativo: true, preco: 349.99, categoria: "camisa", estoque: 4000, quantidade: 0 },

  // Itália
  { id: 8, nome: "Itália", descricao: "Camisa da Seleção Italiana - P", tamanho: "P", ativo: true, preco: 459.99, categoria: "camisa", estoque: 10000, quantidade: 0 },
  { id: 8, nome: "Itália", descricao: "Camisa da Seleção Italiana - M", tamanho: "M", ativo: true, preco: 459.99, categoria: "camisa", estoque: 10000, quantidade: 0 },
  { id: 8, nome: "Itália", descricao: "Camisa da Seleção Italiana - G", tamanho: "G", ativo: true, preco: 459.99, categoria: "camisa", estoque: 10000, quantidade: 0 },
  { id: 8, nome: "Itália", descricao: "Camisa da Seleção Italiana - GG", tamanho: "GG", ativo: true, preco: 459.99, categoria: "camisa", estoque: 10000, quantidade: 0 },

  // Japão
  { id: 9, nome: "Japão", descricao: "Camisa da Seleção Japonesa - P", tamanho: "P", ativo: true, preco: 349.9, categoria: "camisa", estoque: 2000, quantidade: 0 },
  { id: 9, nome: "Japão", descricao: "Camisa da Seleção Japonesa - M", tamanho: "M", ativo: true, preco: 349.9, categoria: "camisa", estoque: 2000, quantidade: 0 },

  // México
  { id: 10, nome: "México", descricao: "Camisa da Seleção Mexicana - P", tamanho: "P", ativo: true, preco: 329.9, categoria: "camisa", estoque: 1450, quantidade: 0 },
  { id: 10, nome: "México", descricao: "Camisa da Seleção Mexicana - M", tamanho: "M", ativo: true, preco: 329.9, categoria: "camisa", estoque: 1450, quantidade: 0 },
  { id: 10, nome: "México", descricao: "Camisa da Seleção Mexicana - G", tamanho: "G", ativo: true, preco: 329.9, categoria: "camisa", estoque: 1450, quantidade: 0 },

  // Portugal
  { id: 11, nome: "Portugal", descricao: "Camisa da Seleção Portuguesa - P", tamanho: "P", ativo: true, preco: 299.99, categoria: "camisa", estoque: 4000, quantidade: 0 },
  { id: 11, nome: "Portugal", descricao: "Camisa da Seleção Portuguesa - M", tamanho: "M", ativo: true, preco: 299.99, categoria: "camisa", estoque: 4000, quantidade: 0 },
  { id: 11, nome: "Portugal", descricao: "Camisa da Seleção Portuguesa - G", tamanho: "G", ativo: true, preco: 299.99, categoria: "camisa", estoque: 4000, quantidade: 0 },
  { id: 11, nome: "Portugal", descricao: "Camisa da Seleção Portuguesa - GG", tamanho: "GG", ativo: true, preco: 299.99, categoria: "camisa", estoque: 4000, quantidade: 0 },

  // Inglaterra
  { id: 12, nome: "Inglaterra", descricao: "Camisa da Seleção Inglesa - P", tamanho: "P", ativo: true, preco: 359.99, categoria: "camisa", estoque: 5000, quantidade: 0 },
  { id: 12, nome: "Inglaterra", descricao: "Camisa da Seleção Inglesa - M", tamanho: "M", ativo: true, preco: 359.99, categoria: "camisa", estoque: 5000, quantidade: 0 },
  { id: 12, nome: "Inglaterra", descricao: "Camisa da Seleção Inglesa - G", tamanho: "G", ativo: true, preco: 359.99, categoria: "camisa", estoque: 5000, quantidade: 0 }

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
        text: `Preparando tudo para sua compra...
            Direcionando para a página de finalização de compra.
        `,
        icon: 'success',
        showConfirmButton: false
    })
    setTimeout(() => {
        window.location.href='finalizacaoCompra.html';
    }, 2000);
}

function adicionarAoCarrinho(idProduto) {
    let produtoEncontrado = false;

    if(carrinho.length==0) {

        for(let i = 0;i < produtos.length; i++) {
            let produto = produtos[i];
            if(parseInt(idProduto)==produto.id && produto.estoque > 0 && produto.ativo==true) {
                produtoEncontrado = true;
                produto.quantidade++, produto.estoque--;
                produtos[i] += produto;
                carrinho.push(produto);
                salvarCarrinho();

                Swal.fire ({
                    title: 'Produto adicionado!',
                    text: 'Operação realizada com sucesso.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1800
                }).then(() => {
                    
                    Swal.fire ({
                        icon: 'question',
                        title: 'O que desejas fazer?',
                        text: 'Escolha para onde prosseguir:',
                        showCancelButton: true,
                        confirmButtonText: 'Continuar comprando',
                        cancelButtonText: 'Ir para o carrinho',
                        confirmButtonColor: 'rgb(0, 150, 0)',
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
    } else {

        for(let j = 0; j < carrinho.length; j++) {
            let produto2 = carrinho[j];
            if(parseInt(idProduto)==produto2.id) {
                Swal.fire ({
                    title:'Produto já adicionado!',
                    text:'Altere a quantidade no carrinho.',
                    icon: 'warning',
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                    confirmButtonColor: 'rgb(0, 160, 0)'
                });
                produtoEncontrado = true;
                salvarCarrinho();
                break;
            } else {
                
                for(let h = 0; h < produtos.length; h++) {
                    let produto3 = produtos[h];
                    if(parseInt(idProduto)==produto3.id && produto3.estoque > 0 && produto3.ativo==true) {
                        produtoEncontrado = true;
                        produto3.quantidade++, produto3.estoque--;
                        carrinho.push(produto3);
                        produtos[h] += produto3;

                        Swal.fire ({
                            title: 'Produto adicionado!',
                            text: 'Operação realizada com sucesso.',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1800
                        }).then(() => {
                        
                            Swal.fire ({
                                icon: 'question',
                                title: 'O que desejas fazer?',
                                text: 'Escolha para onde prosseguir:',
                                showCancelButton: true,
                                confirmButtonText: 'Continuar comprando',
                                cancelButtonText: 'Ir para o carrinho',
                                confirmButtonColor: 'rgb(0, 150, 0)',
                                cancelButtonColor: 'rgb(0, 150, 0)'
                            }).then((result) => {
                                if(!result.isConfirmed) {
                                    window.location.href='carrinho.html';
                                }
                            })
                        })

                                
                        salvarCarrinho();
                        break;
                        }
                    }
                }   
            }
        }
        if(!produtoEncontrado){
            Swal.fire ({
            title: 'Atenção!',
            text: 'Produto fora de estoque ou inativo.',
            icon: 'error'
            });
        }
    }


function limparCarrinho() {
    carrinho = [];
    sessionStorage.removeItem('carrinho');
    calcularTotal();
    renderizarCarrinho();
}

function renderizarCarrinho() {
    const container = document.getElementById('produtosCarrinho');
    let produtoHTML = '';

    if(!container) return;

    container.innerHTML = '';

    if(carrinho.length === 0) {
        container.innerHTML += `
            <div id="message" class="container">
                <h2>O carrinho está vazio...</h2>
                <h4>Desejas comprar alguma coisa?</h4>
                <button onclick="window.location.href='produtos.html'" id="produtos"><strong>Clique aqui!</strong></button> 
            </div>
        `
    }
    
    
    
    for(let f = 0; f < carrinho.length; f++) {
    
        produtoHTML = `
        <section class="produtoCarrinho">
            <article class="card_carrinho">
            <div class="card_description">
               <img src="assets/img/${getImagePorNome(carrinho[f].nome)}" alt="${carrinho[f].nome}">
                <div class="description_body"> 
                    <p>${carrinho[f].descricao}</p>
                    ${carrinho[f].tamanho ? `<p><b>Tamanhos:</b> ${carrinho[f].tamanho.join(', ')}</p>` : ''}
                </div>
            </div>

            <div class="card_footer_carrinho">
                <div class="card_price_carrinho">
                    <span><h2><b>R$ ${carrinho[f].preco.toFixed(2).replace('.', ',')}</b></h2></span>
                </div>
                <div class="quantidade">
                    <button onclick="maisProduto(${carrinho[f].id})" id="mais"></button>
                    <p>${carrinho[f].quantidade}</p>
                    <button onclick="menosProduto(${carrinho[f].id})" id="menos"></button>
                </div>

                <div class="actionsProduto">
                    <button onclick="excluirProduto(${carrinho[f].id})" id="excluirProdutoCarrinho">Excluir produto</button>
                    <button onclick="resetProduto(${carrinho[f].id})" id="resetarProduto">Reset</button>
                </div>
                
            </article>
        </section>
        `;

    container.innerHTML += produtoHTML;
    
    }

    return container;

}

document.addEventListener('DOMContentLoaded', function() {
    renderizarCarrinho();
});

function maisProduto(idProdutoCarrinho) {
    
    carrinho.forEach((produto) => {
        if(produto.id == idProdutoCarrinho) {
            produto.quantidade++;
            produto.estoque--;
            salvarCarrinho();
            calcularTotal();    
        }
    })
    
    document.addEventListener('click', function() {
        renderizarCarrinho();
    });
    
}

function menosProduto(idProdutoCarrinho) {
    
    carrinho.forEach((produto) => {
        if(produto.id == idProdutoCarrinho) {
            produto.quantidade > 1 ? produto.quantidade-- : produto.quantidade = 1;
            produto.estoque++;
            salvarCarrinho();
            calcularTotal();
        }
    })
    
    document.addEventListener('click', function() {
        renderizarCarrinho();
    });
    
}

/* Criar Função de excluir produto do carrinho */

function excluirProduto(idCarrinhoExclusao) {
    
    for (let i = 0; i < carrinho.length; i++) {
        let exclusao = carrinho[i];
        if(exclusao.id==idCarrinhoExclusao) {
            carrinho.splice(carrinho.indexOf(exclusao), 1);
            salvarCarrinho();
            calcularTotal();
        }
    }

    document.addEventListener('click', function() {
        renderizarCarrinho();
    })

}

function calcularTotal() {
    const container = document.getElementById('carrinhoTotal');
    const container2 = document.getElementById('compraDoCarrinho');
    
    let totalHTML = '';
    let comprarHTML = '';

    if(!container) return;
    if(!container2) return;

    container.innerHTML = '';
    container2.innerHTML = '';

    let total = 0;

    carrinho.forEach((produto) => {
        total += (produto.preco * produto.quantidade);
    })

    let valorFormatado = total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    if(carrinho.length>0) {
        totalHTML = `
            <div id="produtosTotal" class="container">
                <h3><b>Total: </b></h3>
                <h3>R$ ${valorFormatado}</h3>
            </div>
        `;

        comprarHTML = `
            <div id="comprarCarrinho" class="container">
                <button onclick="comprarCarrinho()">Finalizar Compra</button>
            </div>
        `;
    }

    container.innerHTML += totalHTML;
    container2.innerHTML += comprarHTML;

    return container, container2;
    
}

document.addEventListener('DOMContentLoaded', function() {
    calcularTotal();
})

function resetProduto(idProduto) {
    
    carrinho.forEach((produto) => {
        if(produto.id == idProduto) {
            produto.estoque += produto.quantidade-1
            produto.quantidade = 1;
            calcularTotal();
            salvarCarrinho();
        }
    })

    document.addEventListener('click', function() {
        resetProduto();
    })

}

function comprarCarrinho() {

}