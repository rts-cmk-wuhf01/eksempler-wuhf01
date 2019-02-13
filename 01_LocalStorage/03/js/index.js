document.addEventListener ("DOMContentLoaded", (event) => {


	document.querySelector ("#btn-hent").addEventListener ("click", (event) => {
		console.log ("Knap: Hent");

		// Henter fra LocalStorage
		let dataJSON = localStorage.getItem ("data");

		if (dataJSON == null) { // Hvis oplysningen IKKE eksisterer
			console.log ("Kunne ikke finde oplysningen");
		}
		else {
			// Konverter til Javascript Object
			let dataObject = JSON.parse (dataJSON);

			console.log (dataObject);
		}
	});

	

	document.querySelector ("#btn-gem").addEventListener ("click", (event) => {
		console.log ("Knap: Gem");

		// Opretter et JS Object
		let dataObject = {
			antal: 10,
			pris: 5
		}

		// Konverterer fra JS Object til JSON (string)
		let dataJSON = JSON.stringify (dataObject);

		// Gemmer i LocalStorage
		localStorage.setItem ("data", dataJSON);
	});



	document.querySelector ("#btn-reducer").addEventListener ("click", (event) => {
		console.log ("Knap: Reducér");
		reducerAntalILocalStorage ();
	});



	function reducerAntalILocalStorage () {
		// Oversigt over de handlinger vi skal udføre, for at ændre én værdi i LocalStorage:
		//    1. Hent fra LocalStorage  (giver os JSON, som bare er en string)
		//    2. JSON.parse  (giver os et JS objekt)
		//    3. Ændr én værdi i Javascript
		//    4. JSON.stringify  (konverterer Javascript objektet til en string)
		//    5. Gem i LocalStorage

		// 1. Hent fra LocalStorage  (giver os JSON, som bare er en string)
		let dataJSON = localStorage.getItem ("data");


		if (dataJSON == null) { // Hvis oplysningen IKKE eksisterer
			console.log ("Kunne ikke finde oplysningen");
		}
		else {
			// 2. JSON.parse  (giver os et JS objekt)
			let dataObject = JSON.parse (dataJSON);

			// 3. Ændr én værdi i Javascript
			dataObject.antal --;

			// 4. JSON.stringify  (konverterer Javascript objektet til en string)
			dataJSON = JSON.stringify (dataObject);

			// 5. Gem i LocalStorage
			localStorage.setItem ("data", dataJSON);
		}
	}
});