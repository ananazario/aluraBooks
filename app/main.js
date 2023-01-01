let livros = [];
const endPointApi = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBuscarLivrosDaApi();

async function getBuscarLivrosDaApi() {
    const res = await fetch(endPointApi);
    livros = await res.json();
    livros = aplicarDesconto(livros);
    exibirLivrosNaTela(livros);
}
