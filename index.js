function calcularIMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var nome = document.getElementById("nome").value;
    var generoElement = document.querySelector('input[name="genero"]:checked');
    var genero = generoElement ? generoElement.value : null;

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0 || !nome || !genero) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    
   const imc = peso / (altura * altura);
    
   let resultado = '';

  
   if (genero === "Feminino") {
    if (imc < 19.1) {
        resultado = "Abaixo do peso";
    } else if (imc <= 25.8) {
        resultado = "Peso normal";
    } else if (imc <= 27.3) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }
} else if (genero === "Masculino") {
    if (imc < 20.7) {
        resultado = "Abaixo do peso";
    } else if (imc <= 26.4) {
        resultado = "Peso normal";
    } else if (imc <= 27.8) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obesidade";
    }
}

document.getElementById("saida").innerText = `IMC: ${imc.toFixed(2)} - ${nome}, sua Classificação: ${resultado}`;
}

const container = document.getElementById('container');

