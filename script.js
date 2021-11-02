function carregar() { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //DIA
        img.src = 'fotomanharedonda.png'
        document.body.style.background = '#ecd15c'        
    }else if (hora >= 12 && hora <= 18) {
        //TARDE
        img.src = 'fototarderedonda.png'
        document.body.style.background = '#977d60'
    }else {
        //NOITE
        img.src = 'fotonoiteredonda.png'
        document.body.style.background = '#3a3840'
    }

} 

