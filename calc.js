function Calcular () {
	var elementoN1 = document.getElementById("primeiro");
	var n1 = elementoN1.value;
	var nota1 = parseFloat(n1);
	
	var elementoN2 = document.getElementById("segundo");
	var n2 = elementoN2.value;
	var nota2 = parseFloat(n2);
	
	var elementoN3 = document.getElementById("terceiro");
	var n3 = elementoN3.value;
	var nota3 = parseFloat(n3);

	
	var calculo = document.getElementById("mediaFinal");
	
	var mediaFinal = (nota1 + nota2 + nota3) / 3;
	
	mediaFinal >= 6 ? calculo.innerHTML = "Parabéns você foi aprovado! Sua média final é: " + mediaFinal.toFixed(2) : calculo.innerHTML =
	"Você foi reprovado! Sua média final é: " + mediaFinal.toFixed(2);
}