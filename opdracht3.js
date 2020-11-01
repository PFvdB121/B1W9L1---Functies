function vragen(){
	while(naam != "stop" || jaar != "stop") {
		var naam = prompt("Wat is jouw naam? Als je deze applicatie wil afsluiten, type dan stop in.");
		if (naam == "stop"){
			break;
		}
		var jaar = prompt("Wat is jouw leeftijd? Als je deze applicatie wil afsluiten, type dan stop in.");
		if (jaar == "stop"){
			break;
		}	
	document.write("Hallo " + naam + " je leeftijd is " + jaar + ".<br>");
	}
}
