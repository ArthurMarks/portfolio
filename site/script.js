document.addEventListener('DOMContentLoaded', () => {
    loadContent('./content/home.html')
    // Carrega em 'main' o conteúdo da página principal
})

function loadContent(c) {
    fetch(c)
    .then(result => result.text())
    .then(html => {
        document.getElementsByTagName('main')[0].innerHTML = html
    })
    .catch(error => console.error(`Ocorreu um erro ao carregar o conteúdo: ${error}`))
}
