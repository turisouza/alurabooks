const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => btn.addEventListener("click", filtrarLivros))

function filtrarLivros() {
    const elementoBTN = document.getElementById(this.id)
    const categoria = elementoBTN.value;

    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    exibirLivrosNaTela(livrosFiltrados)
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {

    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div> 
  

    `

}


// const btLivrosDisponiveis = document.getElementById("btnLivrosDisponiveis");

// btLivrosDisponiveis.addEventListener("click", mostrarLivrosDisponiveis)

// function mostrarLivrosDisponiveis() {

//     let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
//     exibirLivrosNaTela(livrosDisponiveis)
// }