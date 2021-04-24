function badPage(artigo) {
    const body = window.document.getElementById('corpo')
    const head = window.document.getElementById('cabeca')

    window.badPageCofirm = 'true'

    head.innerHTML = `<link rel="stylesheet" href="./Planta/badpage/style.css">`
    head.innerHTML += `<link rel="shortcut icon" href="./Planta/badpage/Logo.png" type="image/x-icon">`
    head.innerHTML += `<title>BadPage</title>`

    body.innerHTML = '<center><img src="./Planta/badpage/Logo.png" alt="Bad" class="logo"></center>'

    body.innerHTML += `<h1>BadPage</h1>`
    body.innerHTML += `<p>Ocorreu um erro pois você alterou algum arquivo chave de direitos do desenvolvedor BADPAGE(${artigo})</p>`

    body.innerHTML += `<p>Artigo ${artigo}: ${window.artigos[artigo]}</p>`
}