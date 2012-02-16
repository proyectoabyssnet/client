/*
* CARD
*/

function Card(name) {

	/* PROPERTIES */
	
	
	
	/* METHODS */
	
	this.use = function() {
		
		console.log("Using card " + this.name);
	}
	
}

Card.prototype = new UIWidget;
