
/ ejercicio mio /

a = 0;
b = 1;
x = "";

function fibonacci(suma) {
	

	for (i = 0; i <= 10; i++) {
		
			x = a + b;
			a = b;
			b = x;

			console.log(x);

		};
	};


/ejercicio simple de saludo /

function hola(saludo) {

	for (i = 0; i <= 10; i++) {
		
		console.log("saludo");
	};
}


/explicación de Diego/

var num1 = 0;
var num2 = 1;
var num3 = "";

function fibonnacci(cuantos) {

	for (i = 0; i<= cuantos; i++){

		num3 = num1 + num2;
		num1 = num2;
		num2 = num3;

		console.log(num3);
	};
}



