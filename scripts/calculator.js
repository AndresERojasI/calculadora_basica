function calcular() {
    var operador = document.getElementById("errores").value;
    var error_resultado = document.getElementById("resultados");
    alert("Has elegido " + operador);

    var primer_numero = document.getElementById("primer_numero").value;
    var segundo_numero = document.getElementById("segundo_numero").value;

    if(primer_numero == null){
        error_resultado,innerHTML = "Debes ingresar el primer número";
        return;
    }

    if(segundo_numero == null){
        error_resultado,innerHTML = "Debes ingresar el segundo número";
        return;
    }

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
        if(segundo_numero == 0){
            error_resultado,innerHTML = "El segundo número no puede ser 0";
            return;
        }
        var resultado = parseInt(primer_numero) / parseInt(segundo_numero);
        info_resultado.innerHTML = resultado;
    }
}
