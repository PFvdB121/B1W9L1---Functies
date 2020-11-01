function makeaddition(number1, number2){
	document.write(number1 + " + " + number2 + " = " + addition(number1, number2) + "<br>");
}
function addition(number1, number2){
		return number1 + number2;
}
function makesubstraction(number1, number2){
	document.write(number1 + " - " + number2 + " = " + substraction(number1, number2) + "<br>");
}
function substraction(number1, number2){
	return number1 - number2;
}
function makemultiplication(number1, number2){
	document.write(number1 + " * " + number2 + " = " + multiplication(number1, number2) + "<br>");
}
function multiplication(number1, number2){
	return number1 * number2;
}
function makedivision(number1, number2){
	document.write(number1 + " / " + number2 + " = " + division(number1, number2) + "<br>");
}
function division(number1, number2){
	return number1 / number2;
}
function makeincrement(number){
	document.write(number + " + 1 = " + increment(number) + "<br>");
}
function increment(number){
	number++
	return number;
}
function makedecrement(number){
	document.write(number + " - 1 = " + decrement(number) + "<br>");
}
function decrement(number){
	number-=1
	return number;
}