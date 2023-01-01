const botoesDeFiltro = document.querySelectorAll(".btn")
botoesDeFiltro.forEach(btn => btn.addEventListener("click", filtroLivros))

function filtroLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    console.table(livrosFiltrados)
}