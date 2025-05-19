function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const nome = parseFloat(document.getElementById("nome").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("saida").innerText = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);

    let resultado = '';
    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }

    document.getElementById("saida").innerText = `IMC: ${imc.toFixed(2)} - ${resultado}`;
}