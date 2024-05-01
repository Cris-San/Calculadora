
document.addEventListener('DOMContentLoaded', function(){
//Obtener referencias a los elementos del DOM
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const operacion = document.getElementById("operacion");
    const calcular = document.getElementById("calcular");
    const resultado = document.getElementById("resultado");

//Agregar evento click al boton calcular
calcular.addEventListener('click', () => {
    const valor1 = parseFloat(num1.value);
    const valor2 = parseFloat(num2.value);
    const operacionSeleccionada = operacion.value;

//Calcular el resultado según la operacion seleccionada
    let resultadoCalculo;

    switch (operacionSeleccionada) {
        case "suma":
            resultadoCalculo = valor1 + valor2;
            break;
        case "resta":
        resultadoCalculo = valor1 - valor2;
            break;
        case "multiplicacion":
        resultadoCalculo = valor1 * valor2;
        break;
        case "division":
        resultadoCalculo = valor1 / valor2;
        break;
}
//Mostrar resultado
    resultado.textContent = `El resultado de la operación es: ${resultadoCalculo}`

});
});

















































