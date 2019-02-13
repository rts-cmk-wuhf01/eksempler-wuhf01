document.addEventListener ("DOMContentLoaded", (event) => {

	document.querySelector ("#btn-hent").addEventListener ("click", (event) => {
	
		console.log ("Knap: Hent");

		let antal = localStorage.getItem ("antal");

		if (antal == null) { // Hvis oplysningen IKKE eksisterer
			console.log ("Kunne ikke finde oplysningen");
		}
		else {
			console.log ("Antallet er " + antal);
		}
	});

	

	document.querySelector ("#btn-gem").addEventListener ("click", (event) => {
		
		console.log ("Knap: Gem");

		// Gem data i Local Storage
		localStorage.setItem ("antal", 10);
		localStorage.setItem ("pris", 5);
	});

	

	document.querySelector ("#btn-slet-specifik").addEventListener ("click", (event) => {
		
		console.log ("Knap: Slet specifik");

		localStorage.removeItem ("antal");
	});

	

	document.querySelector ("#btn-slet-alt").addEventListener ("click", (event) => {
		
		console.log ("Knap: Slet alt");

		localStorage.clear ();
		
	});

	

	document.querySelector ("#btn-reducer").addEventListener ("click", (event) => {
		
		console.log ("Knap: Reducér");

		let antal = localStorage.getItem ("antal");

		if (antal == null) { // Hvis oplysningen IKKE eksisterer
			console.log ("Kunne ikke finde oplysningen");
		}
		else {
			antal --; // Trækker én fra
			localStorage.setItem ("antal", antal); // Gemmer i Local Storage
			console.log ("Antallet er " + antal);
		}
	});





});