function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){

        res.innerHTML = 'Coloca os numero né meu fi'
    }else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Falei pra nao colocar o 0 parça')
            p = 1
        };

        if(i < f ){
            //crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }else{
            //decrecente
            for(let c = i; c >= f; c -= p){
                res,innerHTML += `${c} \u{1F449}`
            }
        };
        res.innerHTML += `\u{1F3C1}`
    };
};