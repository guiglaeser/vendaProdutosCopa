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

function comprar() {
    Swal.fire ({
    title: 'Tens certeza?',
    text: 'Você comprará o produto!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#108926',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Comprar',
    cancelButtonText: 'Cancelar',
    }).then((result) =>  {
        if(result.isConfirmed) {
            Swal.fire ({
                title: 'Perfeito!',
                text: 'Direcionando para a finalização da compra',
                icon: 'success',
                showConfirmButton: false
            })
            setTimeout(() => {
                window.location.href='finalizacaoCompra.html';
            }, 1500);
        }
    })
}

function adicionarAoCarrinho() {
    Swal.fire ({
        title: 'Tens certeza?',
        text: 'Você adicionará o produto ao carrinho!',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#108926',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Adicionar',
        cancelButtonText: 'Cancelar'
    })
}