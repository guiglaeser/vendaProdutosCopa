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