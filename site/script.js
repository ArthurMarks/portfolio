document.addEventListener('DOMContentLoaded', () => {
    loadContent('home')
})
// Carrega em 'main' o conteúdo da página principal

function loadContent(c) {
    const options = document.querySelectorAll('.panel ul li')
    options.forEach(option => {
        option.style.textDecoration = 'none'
    })
    // reseta underline
    let path = './content/'

    if (c == 'home') {
        path += 'home.html'
        options[0].style.textDecoration = 'underline'
    } else if (c == 'projects') {
        path += 'projects.html'
        options[1].style.textDecoration = 'underline'
    } else {
        path += 'more.html'
        options[2].style.textDecoration = 'underline'
    }

    fetch(path)
    .then(response => response.text())
    .then(html => document.querySelector('main').innerHTML = html)
    .catch(error => console.error(`Erro ao carregar o conteúdo: ${error}`))
}
// Função para alterar o conteúdo de 'main'

let active = false

window.addEventListener('resize', () => {
    const panel = document.querySelector('.panel')

    if (window.innerWidth > 800) {
        panel.style.display = 'block'
    } else if (!active) {
        panel.style.display = 'none'
    }
})
// Executa sempre que a tela altera de tamanho

function handleOptions() {
    const panel = document.querySelector('.panel')
    const bars = document.querySelectorAll('.nav-icon div')
    const color = active ? '#fff' : 'var(--color-1)'
    const display = active ? 'none' : 'block'

    bars[0].style.top = active ? '0' : '7.5px'
    bars[0].style.transform = active ? 'rotate(0)' : 'rotate(45deg)'
    bars[1].style.bottom = active ? '0' : '7.5px'
    bars[1].style.transform = active ? 'rotate(0)' : 'rotate(-45deg)'
    
    bars.forEach(bar => bar.style.backgroundColor = color)
    panel.style.display = display

    document.body.style.overflow = active ? 'auto' : 'hidden'

    active = !active
}
// Função para lidar com o menu suspensa em telas pequenas

function handleAll(content) {
    loadContent(content)
    if (window.innerWidth <= 800) handleOptions()
    window.location = '#main'
}
// Função que lida com telas pequenas e grandes
