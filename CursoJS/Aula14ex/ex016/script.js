function contar() {
    var numb = document.getElementById('numb')
    var end = document.getElementById('end')
    var step = document.getElementById('step')
    var res = document.getElementById('res')

    if (numb.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        //window.alert('ERRO')
    } else {
        res.innerHTML = 'Contando: <br>' //br quebra linha
        var n = Number(numb.value)
        var e = Number(end.value)
        var s = Number(step.value)
        if (s <= 0) {
            window.alert('Impossível contar')
            s = 1
        }
        if (n < e) {
             for(var c = n; c <= e ; c += s){ //for
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(var c = n;c >= e ; c-= s){
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
       res.innerHTML += `\u{1F3C1}`
    }
}
