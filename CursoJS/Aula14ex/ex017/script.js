function calcular() {
    let num = document.getElementById(`num`)
    let tab = document.getElementById(`tab`)
    if (num.value.length == 0) {
        window.alert(`[ERRO]`)
    } else {
        var n = Number(num.value)
        // let c = 1 //
        tab.innerHTML = ''
        for (let c = 1 ; c <= 10 ; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        /* while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        } */
    }
}