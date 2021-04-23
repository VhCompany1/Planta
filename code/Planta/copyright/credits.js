const d = window.document.getElementById('desenvolvedor')
const c = window.document.getElementById('contato')

setTimeout(function verify1() { 
    if(c == undefined || d == undefined){
        console.log('planta em ação')
        badPage(2)
    }else if(d.innerHTML == `Desenvolvedor: ${window.dev.name}` && c.innerHTML == `Contato: ${window.dev.contato}`){
        console.log('planta em ação')
        window.account++
    }else{
        console.log('planta em ação')
        badPage(1)   
    }
}, 10)

