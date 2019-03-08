document.addEventListener ("DOMContentLoaded", (event) => {

	document.querySelector ("#btn-get-parameters").addEventListener ("click", (event) => {

		// ================================================================
		// Gets all URL Parameters and puts them in a JS object
		
		let allParameters = getAllURLParameters ();

		console.log ("\n----------\n(Looking for URL parameters)");


		// ================================================================
		// Product

		// Check if the parameter exists
		if (typeof allParameters.productID != "undefined") {
			console.log (`productID found: ` + allParameters.productID);
		}
		else {
			console.log (`productID missing`);
		}


		// ================================================================
		// Category

		// Check if the parameter exists
		if (typeof allParameters.categoryID != "undefined") {
			console.log (`categoryID found: ` + allParameters.categoryID);
		}
		else {
			console.log (`categoryID missing`);
		}

	}); // End of: Button Click event

}); // End of: DOMContentLoaded event