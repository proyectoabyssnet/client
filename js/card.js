/*
* CARD
*/

function Card() {

	/* PROPERTIES */
	
	this.atk = 0;
	this.def = 0;
	this.elementType = "";
	this.container = new CAAT.Actor();
	
	/* METHODS */
	
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
    	
}
