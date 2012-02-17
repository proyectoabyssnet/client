/*
* CARD
*/

function Card(name) {

	/* PROPERTIES */
	
	this.atk = 0;
	this.def = 0;
	this.container = new CAAT.Actor();
	
	/* METHODS */
	
	this.use = function() {
		
		console.log("Using card " + this.name);
	}
	
	this.setImage = function(director, imageName) {
		
		this.container.setBackgroundImage(
				director.getImage(imageName)
		);
	}
    
	
}
