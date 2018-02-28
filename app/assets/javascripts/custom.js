// Première partie : création des fonctions

function add(number1, number2) {
	return number1 + number2;
}

function multiply(number1, number2) {
	return number1 * number2;
}

function divide(number1, number2) {
	if (number2 === 0) {
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

function test(x) {
	console.log(x);

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
		document.getElementById("calcul").innerHTML = arrayNumbers[arrayNumbers.length-1];
	}

// Si on clique sur le point
	else if (x === ".") {
		if (arrayNumbers[arrayNumbers.length-1].includes('.')){
		document.getElementById("calcul").innerHTML = arrayNumbers[arrayNumbers.length-1];
		}
		else {
// Si le dernier clic était une action, on met un zéro devant le point dans une nouvelle case		
			arrayNumbers[arrayNumbers.length-1] += x

		}
	}

	else if (actions.includes(x)) {
		if (actions.includes(arrayNumbers[arrayNumbers.length-1])) {
			arrayNumbers.splice(arrayNumbers.length - 1,1);
			arrayNumbers.push(x);
			document.getElementById("calcul").innerHTML = arrayNumbers[arrayNumbers.length-1];

		}
		else {
			arrayNumbers.push(x);
			document.getElementById("calcul").innerHTML = arrayNumbers[arrayNumbers.length-1];
		}
	}


	else if (x === "=") {
		console.log(arrayNumbers)
		if (arrayNumbers[1] === "+") {
			document.getElementById("calcul").innerHTML = add(Number(arrayNumbers[0]),Number(arrayNumbers[2]));
		}
		else if (arrayNumbers[1] === "-") {
			document.getElementById("calcul").innerHTML = substract(Number(arrayNumbers[0]),Number(arrayNumbers[2]));
		}
		else if (arrayNumbers[1] === "x") {
			document.getElementById("calcul").innerHTML = multiply(Number(arrayNumbers[0]),Number(arrayNumbers[2]));
		}
		else if (arrayNumbers[1] === "/") {
			if (arrayNumbers[2] === "0"){
				alert("Cannot divide by zero");
				document.getElementById("calcul").innerHTML = "0";
			}
			else {
			document.getElementById("calcul").innerHTML = divide(Number(arrayNumbers[0]),Number(arrayNumbers[2]));
			}
		}
		arrayNumbers = []
	}

	else if (x === "clear") {
		arrayNumbers = [];
		document.getElementById("calcul").innerHTML = '0';
	}
}

