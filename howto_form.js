
// results tab variable


var resultstab = "results.html";


//sends user to the results page


function search_form(howto_Form) {
	if (howto_Form.d.value.length > 0) {
		document.cookie = "d=" + escape(howto_Form.d.value) + "; SameSite=Lax;";
		window.location = resultstab;
	}
}
