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
