const botoesDeFiltro = document.querySelectorAll(".btn")
botoesDeFiltro.forEach(btn => btn.addEventListener("click", filtroLivros))

function filtroLivros() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == "disponivel" ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel') {
        exibirValorTotalDeLivrosDisponiveis()
    }
}

function exibirValorTotalDeLivrosDisponiveis() {
    valorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
        </div>
    `
}