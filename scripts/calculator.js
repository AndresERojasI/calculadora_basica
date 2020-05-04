function calcular() {
    var operador = document.getElementById("operador").value;
    alert("Has elegido " + operador);

    var primer_numero = document.getElementById("primer_numero").value;
    var segundo_numero = document.getElementById("segundo_numero").value;

    var info_resultado = document.getElementById("resultados");

    if(operador == "suma") {
        var resultado = parseInt(primer_numero) + parseInt(segundo_numero);
        info_resultado.innerHTML = resultado;
    }

    if(operador == "resta") {
        var resultado = parseInt(primer_numero) - parseInt(segundo_numero);
        info_resultado.innerHTML = resultado;
    }

    if(operador == "multiplicacion") {
        var resultado = parseInt(primer_numero) * parseInt(segundo_numero);
        info_resultado.innerHTML = resultado;
    }

    if(operador == "division") {
        var resultado = parseInt(primer_numero) / parseInt(segundo_numero);
        info_resultado.innerHTML = resultado;
    }
}
