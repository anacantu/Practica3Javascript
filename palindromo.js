//ejercicio de palindromo

var palindromo=prompt("dime un palindromo");
palindromo=palindromo


function isPalindrome (p) {
	var w = p.replace(/\s/g,"");

	if (w == w.split('').reverse().join('')) {
		alert(w + ' is palindrome.');
	}
	else {
		alert(w + 'is not palindrome');
	}
}

function palindrome (frase){
	clean = frase.replace(/[â-zA-A]/g,'').toLowerCase();
	return clean == clean.split("").reverse().join("");
}


function es_palindromo(frase) {
	//primero, limpiar la frase de espacios (con for)//
	frase_sin_espacios = "";
	for (i = 0; i < frase.lenght ; i++){
		if(frase[i] != ""){
			frase_sin_espacios += frase_sin_espacios + frase[i];
		}
		
	}
	//ahora tenemos que voltear la frase//
	longitud = frase_sin_espacios.lenght;
	n_comparaciones = longitud / 2; 

	for(var i = 0; i < longitud ; i++){
		if(frase_sin_espacios[i] == frase_sin_espacios[longitud - 1]){

		} else {
			break;
			return "No es un Palindromo";
		}
		longitud = longitud -1
	}
	return "Es un Palindromo"
}