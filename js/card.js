/*
* CARD OBJECT
*/

var Card = {};

Object.defineProperties(Card, {

	position: 		{ value: [0,0], writable: true },
	elementType: 	{ value: "", writable: true },
	bigImage: 		{ value: "bigImage.png", writable: true },
	container:		{ value: null, writable: true },
	panel1:			{ value: null, writable: true },
	director:		{ value: null, writable: true },	
	slotElements: 	{ 
		value: ["slot-card-mascot-elements",
                 "slot-card-air-elements",
                 "slot-card-water-elements",
                 "slot-card-land-elements",
                 "slot-card-fire-elements"],
                 writable: false 
    },

	
	initCard: {
	
		value: function( director, container )  {
		
			this.container = container;
			this.container.enableDrag();
			this.director = director; 
			this.initEvents();
					
		}, enumerable: false
	},
	
	initEvents: {
	
		value: function() {
		
			var director = this.director;
			var container = this.container;
			
			this.container.mouseUp = function(event) {

				console.log("mouseUp");

				var point = new CAAT.Point(container.x, container.y, container.z);

				
				// Get reference to EquipedCardsPanel
				var equipedCards = director
					.getScene(0)
					.findActorById("equiped_cards_panel");

				// Get reference to slotElement
				// ...
				// Check if card position collides with equipedCardsPanel
				// and add card automatically to the correct cell
				// ...
				
				if (equipedCards != null) {
					
					console.log("Got " + equipedCards.id);
					console.log("card point: " + point.x + "," + point.y + ": " +
								"panel point: " + equipedCards.x + "," + equipedCards.y);
								
					var transformedPoint = container.modelToModel(point, equipedCards);
								
					console.log("Transformed point: " + 
								transformedPoint.x + "," + 
								transformedPoint.y);				
				}
			}
						
			this.container.mouseDown = function(event) {

				console.log("card mouseDown");
			}
			
		}, enumerable: false
	},
	
	setImage: {
	
		value: function(director, imageName) {
		
		var image = director.getImage(imageName);
		
		// Get image name to show the full detailed image
		// p.e.: card-small.jpg -> card.jpg is the detailed image		
		this.bigImage = imageName.substring(0, imageName.indexOf("-"));
		
		this.container.setBackgroundImage(image)
			.setSize(image.width, image.height);
			
		}, enumerable: false,
	},
	
	// Fire, land, air, water,...
	setCardType: {
	
		value: function(elementType) {
		
			this.elementType = elementType;
			
		}, enumerable: false
	},
	
	// Show card details (big picture, text,...)
	showDetails: {
	
		value: function() {
	
		console.log("Card details")
		}, enumerable: false
	}
    	
});
