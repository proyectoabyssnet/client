/*
* CARD OBJECT
*/

var Card = {};

Object.defineProperties(Card, {

	position: 		{ value: [0,0], writable: true },
	elementType: 	{ value: "", writable: true },
	bigImage: 		{ value: "bigImage.png", writable: true },
	container:		{ value: null, writable: true },
	isMoving:		{ value: false, writable: true }, // Is card moving?
	oldPosition:	{ value: false, writable: true },

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
		
			this.container = container;
			this.container.enableDrag();
			this.initEvents();
					
		}, enumerable: false
	},
	
	initEvents: {
	
		value: function() {
		
			var container = this.container;
			
			this.container.mouseDown = function(event) {

				console.log("card mouseDown");
				Card['isMoving'] = true;
			}
						
			this.container.mouseUp = function(event) {

				console.log("*** MOUSE UP ***");
				Card['isMoving'] = false;
				
				// Get reference to EquipedCardsPanel
				var equipedCardsPanel = window['equiped_cards_panel'];
				var cardsOnHandPanel = window['cards_on_hand_panel'];
				
				// Convert card coordinates to EquipedCardsPanel coordinates
				var convertedPoint = container.modelToModel( 
					new CAAT.Point(0,0), 
					equipedCardsPanel.container 
				);

				// Check if card x,y position collides EquipedCardsPanel area
				if (
					(convertedPoint.x >= equipedCardsPanel.container.x && 
					convertedPoint.x <= equipedCardsPanel.container.x + equipedCardsPanel.container.width) 
					&&
					(convertedPoint.y >= equipedCardsPanel.container.y && 
					convertedPoint.y <= equipedCardsPanel.container.y + equipedCardsPanel.container.height)
					) 
				{
					console.log("Card is over EquipedCardsPanel");
					// Get card to be equiped
					//...
					
					// Tell EquipedCardsPanel to equip this card but first of all
					//equipedCardsPanel.equipCard( cardIndex );
				}
				
			}	
					
			
		}, enumerable: false
	},
	
	setImage: {
	
		value: function(imageName) {
		
		var image = window['director'].getImage(imageName);
		
		// Get image name to show the full detailed image
		// p.e.: card-small.jpg -> card.jpg is the detailed image		
		this.bigImage = imageName.substring(0, imageName.indexOf("-"));
		
		this.container.setBackgroundImage(image)
			.setSize(image.width, image.height);
			
		}, enumerable: false,
	},
	
	// Fire, land, air, water,...
	setElementType: {
	
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
