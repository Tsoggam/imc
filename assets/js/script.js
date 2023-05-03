function calcularIMC() {
    const weight = Number(document.getElementById("peso").value);
    const height = Number(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
    
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultado.innerHTML = 'Inválido!';
      return;
    }
  
    const imc = weight / (height ** 2);
  
    if (imc < 18.5) {
      resultado.innerHTML = "Abaixo do peso.";
    } else if (imc < 25) {
      resultado.innerHTML = "Peso normal.";
    } else if (imc < 30) {
      resultado.innerHTML = "Acima do peso.";
    } else {
      resultado.innerHTML = "Obesidade.";
    }
}