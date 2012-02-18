/*
* CARD
*/

function Card() {

	/* PROPERTIES */
	
	this.position = [0,0];
	this.atk = 0;
	this.def = 0;
	this.elementType = "";
	this.container = new CAAT.Actor();
	this.bigImage = "";
	
	/* METHODS */

	this.container.mouseMove = function(mouseEvent) {
	
		var actor = mouseEvent.source;
		console.log(actor.id);
	}
	
	this.use = function() {
		
		console.log("Using card " + this.container.id);
	}
	
	this.setImage = function(director, imageName) {
		
		var image = director.getImage(imageName);
		
		// Get image name to show the full detailed image
		// p.e.: card-small.jpg -> card.jpg is the detailed image		
		this.bigImage = imageName.substring(0, imageName.indexOf("-"));
		
		this.container.setBackgroundImage(image)
			.setSize(image.width, image.height);
	}
	
	// Fire, land, air, water,...
	this.setCardType = function(elementType) {
		
		this.elementType = elementType;
	}
	
	// Show card details (big picture, text,...)
	this.showDetails = function() {
	
		console.log("Card details")
	}
    	
}
