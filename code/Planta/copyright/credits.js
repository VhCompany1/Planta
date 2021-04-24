const d = window.document.getElementById('desenvolvedor')
const c = window.document.getElementById('contato')

setTimeout(function verify1() { 
    if(c == undefined || d == undefined){
        console.log(window.msg)
        console.log('Você apagou os creditos do dev deste site')
        badPage(2)
    }else if(d.innerHTML == `Desenvolvedor: ${window.dev.name}` && c.innerHTML == `Contato: ${window.dev.contato}`){
        console.log(window.msg)
        console.log(`${d.innerHTML} é o dev deste site`)
        window.account++
    }else{
        console.log(window.msg)
        console.log(`${d.innerHTML} não é o nome do dev deste site`)
        badPage(1)   
    }
}, 10)

