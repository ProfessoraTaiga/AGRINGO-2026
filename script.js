// Selecionando elementos do HTML
const btnCalcular = document.getElementById('btnCalcular');
const areaInput = document.getElementById('areaInput');
const resultado = document.getElementById('resultado');

// Função para processar a informação [7]
btnCalcular.addEventListener('click', () => {
    const areaTotal = parseFloat(areaInput.value);

    if (isNaN(areaTotal) || areaTotal <= 0) {
        resultado.innerText = "Por favor, insira um valor válido.";
        resultado.style.color = "red";
    } else {
        const reserva = areaTotal * 0.2; // Cálculo de 20%
        resultado.innerText = `Para uma propriedade de ${areaTotal} ha, a área de reserva deve ser de no mínimo ${reserva.toFixed(2)} ha.`;
        resultado.style.color = "#2e7d32";
    }
});
