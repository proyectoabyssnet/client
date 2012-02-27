/*
* CARD
*/

function Card() {

	/* PROPERTIES */
	
	var position = [0,0];
	this.elementType = "";
	this.container = new CAAT.Actor();
	var bigImage = "";
	var clicked = false;
	var dragging = false;
	var dropped = false;

	
	/* METHODS */
	
	this.container.mouseUp = function(event) {
	
		console.log("mouseUP");
		
		if (clicked == true && dragging == true) {
			console.log("droped");
			dragging = false;
			clicked = false;
		}
	}
	
	this.container.mouseDown = function(event) {
		
		clicked = true;
		console.log("mouseDown");
	}
	
	this.container.mouseMove = function(event) {
	
		console.log("moseMove");
		
		if (clicked == true) {
			console.log("draging");
			dragging = true;
		}	
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
