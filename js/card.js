/*
* CARD
*/

function Card(name) {

	/* PROPERTIES */
	
	this.atk = 0;
	this.def = 0;
	
	/* METHODS */
	
	this.use = function() {
		
		console.log("Using card " + this.name);
	}
	
}
