if (window.SSR) {
    const header = document.createElement('h1')
    header.textContent = 'Hello world'
    const divRoot = document.querySelector('#root')
    divRoot.append(header)
}

document.querySelector('button').addEventListener('click', () => {
    console.log('Click')
})