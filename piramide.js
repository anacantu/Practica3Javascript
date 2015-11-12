// forma de hacer la piramide según Alix

var asterisco = "";
var numero_de_lineas = 10;
for (var i =0; i < numero_de_lineas; i++){
	asterisco +='*';
	console.log(asterisco);
}

// forma de hacer la piramide según Diego

var num = "";
for (var i = 1; i < 20; i++) {
	num = num + "#";
	console.log(num);
}

//forma de hacer la piramide según Marcia 

var asterisco = "";

function piramide(cuantos) {

	for (var i = 1; i <= cuantos; i++) {
		asterisco += '*'
		console.log(asterisco);
	}
}


//piramide de números ascendentes

function piramide_numeros(mas) {

	var numeros_ascendentes = "";

	for (var i = 0; i < mas; i++){

		numeros_ascendentes += i+1;

		console.log(numeros_ascendentes)
	}
}

piramide_numeros(20);

