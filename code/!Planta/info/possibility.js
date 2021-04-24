
setTimeout(function verify2(){
    let account = 0

for(let c = 0;c <= 10;c++){
    const p = {
        1: 'Luis',
        2: 'VhCompany',
        3: 'Victor',
        4: 'Pedro',
        5: 'Lucas',
        6: 'Caio',
        7: 'Yuri',
        8: 'João',
        9: 'Casio',
        10: 'Jorge'
    }

    if(window.dev.name != p[c]){
        account++
    }else{
        c = 10
    }
}
setTimeout(function listverify(){
    if(account == 10){
    badPage(1)
    console.log('planta em ação')
    console.log(`${window.dev.name} não esta na whitelist de devs`)
}else{
    console.log('planta em ação')
    console.log(`${window.dev.name} esta na whitelist de devs`)
    window.account++
}
}, 1000)

}, 10)

