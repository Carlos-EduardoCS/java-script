
/* 
let num = [8,4,5,9,7,6,2]
num.push(1)
num.sort()

console.log(num);
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro numero do vetor é ${num[0]}`);
*/


//vetor na jenalea


/*
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]} `);
    
}
*/

let valores =[0,4,8,5,6,9,3]
valores.sort()
/*
for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`);
}
*/


let pos = valores.indexOf(1)// <---- valores dentro da varialvel composta ex: let val = [(1),2,1,3,1,]
if(pos == -1){
    console.log('o valor nao foi encontrado');
}else{
    console.log(`a valor esta na posição ${pos}`);
}

//console.log(` o valor 9 esta na posiçâo ${pos} `);