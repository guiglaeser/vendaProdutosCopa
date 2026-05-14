let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function salvarCarrinho() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

var produtos = [
  {id: 1, nome: "Álbum de Figurinhas", descricao: "Álbum de figurinhas da Copa do Mundo 2026 - Capa Dura Ouro", estoque: 20000, categoria: "album", precos: 139.9, ativo: true, quantidade: 0},
  { id: 2, nome: "Brasil", descricao: "Camisa da Seleção Brasileira", tamanhos: ['P', 'M', 'G', 'GG'], estoque: [2000, 5000, 10000, 15000], precos: [248.2, 264.3, 339.99, 389.9], categoria: "camisa", ativo: true, quantidade: 0, tamanho: []},
  { id: 3, nome: "Uruguai", descricao: "Camisa da Seleção do Uruguai", tamanhos: ['P', 'M', 'G', 'GG', 'G1'], estoque: [2000, 6000, 12000, 14000, 3000], ativo: true, precos: [170.99, 215.8, 249.99, 272.2, 299.9], categoria: "camisa", quantidade: 0, tamanho: []},
  { id: 4, nome: "Argentina", descricao: "Camisa da Seleção Argentina", tamanhos: ['P', 'M', 'G', 'GG', 'G1', 'G2'], ativo: true, precos: [249.9, 269.99, 299.9, 329.9, 355.7, 382.40], estoque: [3000, 6000, 10000, 14000, 5000, 9000], categoria: "camisa", quantidade: 0, tamanho: []},
  { id: 5, nome: "Alemanha", descricao: "Camisa 2 da Seleção Alemã", tamanhos: ['P', 'M', 'G', 'GG'], ativo: true, estoque: [6000, 10000, 15000, 20000], precos: [320, 359.9, 429.99, 489.9], categoria: "camisa", quantidade: 0, tamanho: []},
  { id: 6, nome: "Espanha", descricao: "Camisa da Seleção Espanhola", tamanhos: ['P', 'M', 'G'], ativo: true, precos: [280.78, 315.9, 339.99], categoria: "camisa", estoque: [3000, 4000, 10000], quantidade: 0, tamanho: []},
  { id: 7, nome: "EUA", descricao: "Camisa da Seleção Americana", tamanhos: ['P', 'M', 'G'], ativo: true, precos: [259.9, 288.7, 329.99], categoria: "camisa", estoque: [4000, 2000, 8000], quantidade: 0, tamanho: []},
  { id: 8, nome: "Itália", descricao: "Camisa da Seleção Italiana", tamanhos: ['P', 'M', 'G', 'GG'], ativo: true, precos: [239.70, 267.9, 378.7, 459.99], categoria: "camisa", estoque: [5000, 20000, 15000, 10000], quantidade: 0, tamanho: []},
  { id: 9, nome: "Japão", descricao: "Camisa da Seleção Japonesa", tamanhos: ['P', 'M'], ativo: true, precos: [229.9, 269.99], categoria: "camisa", estoque: [2000, 4000], quantidade: 0, tamanho: []},
  { id: 10, nome: "México", descricao: "Camisa da Seleção Mexicana", tamanhos: ['P', 'M', 'G'], ativo: true, precos: [245.9, 279.9, 329.9], categoria: "camisa", estoque: [1450, 3000, 5000], quantidade: 0, tamanho: []},
  { id: 11, nome: "Portugal", descricao: "Camisa da Seleção Portuguesa", tamanhos: ['P', 'M', 'G', 'GG'], ativo: true, precos: [259.9, 299.99, 320.99, 365.8], categoria: "camisa", estoque: [4000, 3000 ,5000, 10000], quantidade: 0, tamanho: []},
  { id: 12, nome: "Inglaterra", descricao: "Camisa da Seleção Inglesa", tamanhos: ['P', 'M', 'G'], ativo: true, precos: [210.15, 270, 329.99], categoria: "camisa", estoque: [5000, 12000, 15000], quantidade: 0, tamanho: []},


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
                                ${produto.tamanhos ? `<p><b>Tamanhos:</b> ${produto.tamanhos.join(', ')}</p>` : ''}
                            </div>
                        </div>

                        <div class="card_footer">
                            <div class="card_price">
                                <span><h3><b>Preço: </b> vide carrinho</h3></span>
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
    }, 1800);
}

function adicionarAoCarrinho(idProduto) {
    let produtoEncontrado = false;
    
    if(carrinho.length==0) {
        
        for(let i = 0;i < produtos.length; i++) {
            let produto1 = produtos[i];
            
            let totalEstoque1 = 0;
            if(produto1.categoria == "camisa") {
                for (let w = 0; w < produto1.estoque.length; w++) {
                    totalEstoque1 += produto1.estoque[w];
                }
            }
            
            if(parseInt(idProduto)==produto1.id && produto1.ativo==true && (produto1.categoria == "camisa" ? totalEstoque1>1 : produto1.estoque>1)) {
                produtoEncontrado = true;
                produto1.quantidade++;
                carrinho.push(produto1);
                salvarCarrinho();
                
                Swal.fire ({
                    title: 'Produto adicionado!',
                    text: '',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1100
                })
                
                break;
            }
        }
    } else {
        
        for(let j = 0; j < carrinho.length; j++) {
            let produto2 = carrinho[j];
            if(parseInt(idProduto) == produto2.id) {
                Swal.fire ({
                    title:'Produto já adicionado!',
                    text:'Altere a quantidade no carrinho.',
                    icon: 'warning',
                    confirmButtonText: 'Ok',
                    confirmButtonColor: 'rgb(0, 160, 0)'
                })
                produtoEncontrado = true;
                salvarCarrinho();
                break;
            }
        }
        
        for(let h = 0; h < produtos.length; h++) {
            let produto3 = produtos[h];
            
            let totalEstoque2 = 0;
            if(produto3.categoria == "camisa") {
                for (let q = 0; q < produto3.estoque.length; q++) {
                    totalEstoque2+=produto3.estoque[q];                    
                }
            }
            
            if(parseInt(idProduto) == produto3.id && produto3.ativo == true && (produto3.categoria == "camisa" ? totalEstoque2>1 : produto3.estoque>1)) {
                produtoEncontrado = true;
                produto3.quantidade++;
                carrinho.push(produto3);

                Swal.fire ({
                    title: 'Produto adicionado!',
                    text: '',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1100
                })
                        
                salvarCarrinho();
                break;
            }
        }

        }
        if(!produtoEncontrado){
            Swal.fire ({
            title: 'Atenção!',
            text: 'Produto fora de estoque ou inativo.',
            icon: 'warning',
            confirmButtonText: 'Ok',
            confirmButtonColor: 'rgb(0, 150, 0)'
            });
        }
    }


function limparCarrinho() {
    carrinho = [];
    sessionStorage.removeItem('carrinho');
    calcularTotal();
    salvarCarrinho();
    renderizarCarrinho();
}

function renderizarCarrinho() {
    const container = document.getElementById('produtosCarrinho');
    let containerTamanhos = document.getElementById('tamanhos');
    let produtoHTML = '';
    let tamanhosHTML = '';

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
    
    /* ${carrinho[f].tamanhos ? `<p><b>Tamanhos:</b> ${carrinho[f].tamanhos.join(', ')}</p>`: '' } */
    

    for(let f = 0; f < carrinho.length; f++) {

        containerTamanhos = '';

        if(carrinho[f].tamanhos) {
            for (let i = 0; i < carrinho[f].tamanhos.length; i++) {
            
                tamanhosHTML = `
                    <div id="segmentoTamanho">
                        <input type="checkbox" id="tamanhoProduto" name="${carrinho[f].tamanhos[i]}" value="${carrinho[f].tamanhos[i]}" onclick="selecionarTamanho([${carrinho[f].id}, '${carrinho[f].tamanhos[i]}'])"> 
                        <label for="tamanhoProduto">${carrinho[f].tamanhos[i]}</label>
                    </div>
                `;
            
                containerTamanhos += tamanhosHTML;
                
            }
        }
        
//        <span><h2><b>R$ ${carrinho[f].preco.toFixed(2).replace('.', ',')}</b></h2></span>
        
        produtoHTML = `
        <section class="produtoCarrinho">
            <article class="card_carrinho">
            <div class="card_description">
               <img src="assets/img/${getImagePorNome(carrinho[f].nome)}" alt="${carrinho[f].nome}">
                <div class="description_body"> 
                    <p>${carrinho[f].descricao}</p>
                    ${containerTamanhos == '' ? '' : 
                        `
                        <div id="tamanhos" class="container">
                            ${containerTamanhos}
                        </div>

                        `}
                </div>
            </div>

            <div class="card_footer_carrinho">
                <div class="card_price_carrinho"></div>
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
    };
    
    document.addEventListener('click', function() {
        renderizarCarrinho();
    });
    
}

function selecionarTamanho(tamProduto) {
    const checkbox = document.querySelector(`input[name=${tamProduto[1]}]`);
    const precoCarrinho = document.querySelector('.card_price_carrinho');

    if(!precoCarrinho) return;

    precoCarrinho.innerHTML = '';

    let precoHTML = '';
    let idProduto = tamProduto[0];
    let produtoTam = tamProduto[1];
    let preco = null;

    if (checkbox.checked) {
        carrinho.forEach ((produto) => {
            let indexTamanho = produto.tamanhos.indexOf(produtoTam);
            let estoqueProduto = produto.estoque[indexTamanho];
            if(produto.id == idProduto && estoqueProduto < 0) {
                preco += produto.precos[indexTamanho];
                produto.tamanho.push([produtoTam, produto.precos[indexTamanho]]);
                produto.estoque[indexTamanho]--;
                precoHTML = 
                `
                <span><h4> R$ ${preco}</h4></span>
                `
                precoCarrinho.innerHTML += precoHTML;
            } else {
                Swal.fire ({
                    title: 'Erro!',
                    text: 'Tamanho fora de estoque.',
                    icon: 'error',
                    confirmButtonText: 'Ok', 
                    confirmButtonColor: 'rgb(0, 150, 0)'
                });
                checkbox.checked = false;
            }
        });

    }

    
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

    /* carrinho.forEach((produto) => {
        //Refazer a lógica do cálculo do total
    })
 */
    let valorFormatado = total.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    if(carrinho.length>0) {
        totalHTML = `
            <div id="produtosTotal" class="container">
                <h3><b>Total: </b></h3>
                <h3>R$ ${valorFormatado=0}</h3>
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
    
    /* const containerTamanhos = document.g */

    carrinho.forEach((produto) => {
        if(produto.id == idProduto) {
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
    window.location.href='finalizacaoCompra.html';
}
