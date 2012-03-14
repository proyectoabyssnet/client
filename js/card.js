/*
* CARD OBJECT
*/

var Card = {};

Object.defineProperties(Card, {

	position: 		{ value: [0,0], writable: true },
	elementType: 	{ value: "", writable: true },
	//container: 		{ value: null, writable: true },
	bigImage: 		{ value: "", writable: true },
	director: 		{ value: null, writable: false },
	slotElements: 	{ 
		value: ["slot-card-mascot-elements",
                 "slot-card-air-elements",
                 "slot-card-water-elements",
                 "slot-card-land-elements",
                 "slot-card-fire-elements"],
                 writable: false 
    },

	
	initCard: {
		value: function( container )  {
		
			//this.container = new CAAT.Actor();
			this.container = container;
			this.container.enableDrag();
			this.container.mouseUp = function(event) {

			var point = new CAAT.Point(this.x, this.y, this.z);
			var equipedCards = director.findActorById("equiped_cards_panel");
	
			console.log(this.container.modelToModel(point, equipedCards));
			}
			
			this.container.mouseDown = function(event) {

				console.log("mouseDown");
			}

			this.setDirector = function(theDirector) {
				console.log("Setting director");
				director = theDirector;
			}
					
		}, writable: false
	},
	
	setImage: {
		value: function(director, imageName) {
		
		var image = director.getImage(imageName);
		
		// Get image name to show the full detailed image
		// p.e.: card-small.jpg -> card.jpg is the detailed image		
		this.bigImage = imageName.substring(0, imageName.indexOf("-"));
		
		this.container.setBackgroundImage(image)
			.setSize(image.width, image.height);
			
		}, writable: false,
	},
	
	// Fire, land, air, water,...
	setCardType: {
		value: function(elementType) {
		
		this.elementType = elementType;
		}, writable: false
	},
	
	// Show card details (big picture, text,...)
	showDetails: {
		value: function() {
	
		console.log("Card details")
		}, writeble: false
	},
	
	forTesting: {
		value: function(director) {
	
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
		}, writable: false
	}
    	
});
