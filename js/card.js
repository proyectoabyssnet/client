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
	this.slotElements = ["slot-card-mascot-elements",
	                     "slot-card-air-elements",
	                     "slot-card-water-elements",
	                     "slot-card-land-elements",
	                     "slot-card-fire-elements"];

	
	/* METHODS */
	
	this.container.mouseUp = function(event) {
		
		console.log("mouseUp");
	}
	
	this.container.mouseDown = function(event) {
	
		console.log("mouseDown");
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
	
	this.forTesting = function(director) {
	
//		var point = new CAAT.Point(this.x, this.y, 0);
//		
//		var equipedCards = director.findActorById("equiped_cards_panel");
//		
//		if (equipedCards == null) {
//			console.log("equipedCards actor not found");
//			return;
//		}
//		
//		var slotElement = equipedCards.findActorById(this.slotElements[2]);
//							
//		if (slotReference != null) {
//		
//			console.log("modelToModel result: " +
//				this.container.modelToModel(point, slotReference));			
//				
//		} else {
//		
//			console.log("null reference to slotElement" + slotReference);
//		}

	}
    	
}
