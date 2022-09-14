function calcular() {
    var n1 = Number(document.getElementById("peso").value)
    var n2 = Number(document.getElementById("altura").value)

    var conta = n1 / (n2*n2)

    if (conta <= 18.5) {
        document.getElementById('resultado').innerHTML = `<p>Seu resultado deu ${conta}, abaixo do peso</p>`
    } else if (conta >= 18.6 && conta <= 24.9) {
        document.getElementById('resultado').innerHTML = `<p>Seu resultado deu ${conta}, Peso ideal</p>`
    } else if (conta >= 25.0 && conta <= 29.9) {
        document.getElementById('resultado').innerHTML = `<p>Seu resultado deu ${conta}, levemente acima do peso</p>`
    }  else if (conta >= 30.0 && conta <= 34.9) {
        document.getElementById('resultado').innerHTML = `<p>Seu resultado deu ${conta}. obesidade 1</p>`
    } else if (conta >= 35.0 && conta <= 39.9) {
        document.getElementById('resultado').innerHTML = `<p>Seu resultado deu ${conta}. obesidade 2 (severa)</p>`
    } else if (conta >= 40) {
        document.getElementById('resultado').innerHTML = `<p>Seu resultado deu ${conta}. obesidade 3 (mórbida)</p>`
    }
}