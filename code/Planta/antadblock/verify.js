const anuncio = window.document.getElementById('hpSponsor')

setTimeout(function(){
    if(window.site.antadblock == 'true'){
    setTimeout(verifyadblock(),1000) 
    console.log(window.msg)
    console.log('inicio na busca de adblock')
}else{
    console.log(window.msg)
    console.log('Este site não tem restrição com adblock')
}
}, 7000) 

function verifyadblock(){
    setTimeout(function exe(){
        if(window.verifyadblock1 == undefined){
        console.log('erro')
    }else{
        console.log(window.msg)
        console.log('procurando adblock')
    }
    }, 4000)
 
    setTimeout(function(){
        
        anuncio.click()

        if(window.verifyadblock2 == undefined){
            console.log('erro')
        }else{
        console.log(window.msg)
        console.log('procurando adblock')
        }
    }, 5000)
} 


