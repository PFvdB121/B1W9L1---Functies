function table(){
	var van = prompt("Tot en met welke tafel wil je uitschrijven?");
	if (van>0 && van<11){
		for (var x = 1; x <= van; x++) {
			document.write("Tafel van " + x + "<br>")
			for (var i = 1; i <=10; i++) {
				var reken=x*i;
				document.write(x + "*" + i + "="+  reken + "<br>");
			}
			document.write("<br>")
		}
	}
	else if (van<=0 || van>=11){
		alert("Type een getal tussen de 1 en de 10 in.");
	}
	else if (van != Number){
		alert("Type een getal in");
	}
}