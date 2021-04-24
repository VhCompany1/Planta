window.account = 0 // 2

setTimeout(function verifyaccount(){
    if(window.account < 2&&window.badPageCofirm == undefined){
    badPage(0)
    console.log('planta em ação')
    console.log(`Algo não esta certo...`)
}else if(window.account < 2){
    console.log('planta em ação')
    console.log(`Algo não esta certo...`)
}else{
    console.log('planta em ação')
    console.log(`Tudo ok...`)
}
}, 5000)


