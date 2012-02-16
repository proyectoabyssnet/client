/*
* CARD
*/

function Card(name) {

	/* PROPERTIES */
	
	this.name = name || "";
	
	/* METHODS */
	
	this.use = function() {
		
		console.log("Using card " + this.name);
	}
}
