/*
* CARD
*/

function Card() {

	/* PROPERTIES */
	
	this.atk = 0;
	this.def = 0;
	this.container = new CAAT.Actor();
	
	/* METHODS */
	
	this.use = function() {
		
		console.log("Using card " + this.container.id);
	}
	
	this.setImage = function(director, imageName) {
		
		this.container.setBackgroundImage(
				director.getImage(imageName)
		);
	}
    	
}
