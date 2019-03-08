// Define all your "helper functions" in this file.
// The functions should not be for a specific page.

// Do NOT use the DOMContentLoaded event here.

function getAllURLParameters (url = "") {
	// If you do not pass a URL as an argument, the function will use the current page's URL.
	if (url == "") url = window.location.href;

	url = url + "";
	var urlParams = {};
	url.replace (
		new RegExp("([^?=&]+)(=([^&]*))?", "g"),
		function ($0, $1, $2, $3) {
			urlParams[$1] = $3;
		}
	);

	return urlParams;
}