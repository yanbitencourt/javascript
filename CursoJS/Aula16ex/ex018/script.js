let num = document.querySelector('input#num')
let tab = document.querySelector('select#tabela')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, t) {
    if (t.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function verificar() {
    if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        tab.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.lenght == 0) {
        window.alert('Por favor, insira valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = Math.max.apply(Math, valores)
        let menor = Math.min.apply(Math, valores)
        let soma = 0
        for (let a = 0; a < valores.length;a++){
            soma += valores[a]
        }
        let media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} números `
        res.innerHTML += `<p> O maior valor é ${maior} </p>`
        res.innerHTML += `<p> O menor valor é ${menor} </p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}`
        res.innerHTML += `<p> A média dos valores é ${media}`
    }
}