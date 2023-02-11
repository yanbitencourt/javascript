function carregar() {
    var msg= window.document.getElementById('msg')
    var img=  window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 23
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png.png'
        document.body.style.background = '#86D1D4'
    } else if (hora > 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.png.png'
        document.body.style.background = '#934F4C'
    } else {
        //boa noite
        img.src = 'fotonoite.png.png'
        document.body.style.background = '#021938'
    }
}