// Première partie : création des fonctions

function add(number1, number2) {
	return number1 + number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	if (number2 === 0) {
		alert("Cannot divide by zero");
	}
	else {
		return number1 / number2;
	}
}

function substract(number1, number2) {
	return number1 - number2;
}

// On affiche dans la console le contenu du td qui nous intéresse

var arrayNumbers = [];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var actions = ['+','-','x','/'];

$("td").on( 'click', function () {
	x = $(this).text();

// Si le choix est un nombre
	if (numbers.includes(x)) {
// Si le tableau est vide, la première case prend l'entier	
		if (arrayNumbers.length === 0) {
			arrayNumbers.push(x);
		}
// Si le tableau n'est pas vide et que la dernière case est une action, on ajoute une nouvelle case au tableau	
		else if (actions.includes(arrayNumbers[arrayNumbers.length-1])) {
			arrayNumbers.push(x);
		}
// Sinon, on concatène		
		else {
			arrayNumbers[arrayNumbers.length-1] += x;
		}
		$('#calcul').text(arrayNumbers[arrayNumbers.length-1]);
	}

// Si on clique sur le point
	else if (x === ".") {
		if (arrayNumbers[arrayNumbers.length-1].includes('.')){
			$('#calcul').text(arrayNumbers[arrayNumbers.length-1]);

		}
		else {
// Si le dernier clic était une action, on met un zéro devant le point dans une nouvelle case		
			arrayNumbers[arrayNumbers.length-1] += x

		}
	}


	else if (actions.includes(x)) {
		if (actions.includes(arrayNumbers[arrayNumbers.length-1])) {
			arrayNumbers.splice(arrayNumbers.length - 1,1);
			arrayNumbers.push(x = $(this).text());
			$('#calcul').text(arrayNumbers[arrayNumbers.length-1]);

		}
		else {
			arrayNumbers.push(x = $(this).text());
			$('#calcul').text(arrayNumbers[arrayNumbers.length-1]);
		}
	}


	else if (x === "=") {
		if (arrayNumbers[1] === "+") {
			$('#calcul').text(add(Number(arrayNumbers[0]),Number(arrayNumbers[2])));
		}
		else if (arrayNumbers[1] === "-") {
			$('#calcul').text(substract(Number(arrayNumbers[0]),Number(arrayNumbers[2])));
		}
		else if (arrayNumbers[1] === "x") {
			$('#calcul').text(multiply(Number(arrayNumbers[0]),Number(arrayNumbers[2])));
		}
		else if (arrayNumbers[1] === "/") {
			$('#calcul').text(divide(Number(arrayNumbers[0]),Number(arrayNumbers[2])));
		}
		arrayNumbers = []
	}

	else if (x === "clear") {
		arrayNumbers = [];
		$('#calcul').text('0');
	}
})



;
