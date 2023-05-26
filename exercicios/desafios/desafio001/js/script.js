
function carregar (){
    var msg = document.getElementById('msg');
    var foto = document.getElementById('img');
    var data = new Date()
    var hora = data.getHours()


    msg.innerHTML =  `Agora são ${hora} horas`;
    if (hora >= 0 && hora < 12 ){
        // bom dia 
        img.src = 'cafe.jpg'
        document.body.style.background = 'cyan'

    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
    } else{
        img.src = 'noite.jpg'
        document.body.style.background = 'dark gray'
    }
}

