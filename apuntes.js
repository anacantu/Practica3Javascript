// sobre parámetros

var mi_funcion= function(param_1, param_2){
	console.log("Funciones");
}

var mi_funcion= function(param_1, param_2){
	console.log("El parametro 1 es: " + param_1);
	console.log("El parametro 2 es: " + param_2);
}

function saludar(a_quien){
	alert("Hola " + a_quien);
}

function saludar(a_quien){
	var aleatorio = Math.random();
	console.log("Hola " + a_quien);
	console.log("¿Como estas?");
	console.log("Tu numero aleatorio es: " + aleatorio);
}

console.log("Hola" + persona_1);

saludar("Matteo")
saludar("Ana");
saludar("Ivan");
saludar("Diego");
saludar("Roberto");

// la funcion va a determinar los "a_quienes"


function suma(num_1, num_2){
	suma = num_1 + num_2;
	return suma;
}

function cuadrado(numero){
	cuadrado = numero * numero;
	return cuadrado;
	// return numer * numero;
}

function cuadrado(numero){
	var resultado = numero * numero;
	console.log("El cuadrado es " + resultado);
	return resultado;
	}

function resta(numero_1, numero_2){
	var return = numero_1 - numero_2;
	console.log("La resta es: " + resultado);
	return resultado;
}
