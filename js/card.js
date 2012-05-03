/*
* CARD OBJECT
*/

var Card = {};

Object.defineProperties(Card, {

	elementType: 	{ value: "", writable: true },
	tagVisible:		{ value: false, writable: true },
	bigImage: 		{ value: "bigImage.png", writable: true },
	container:		{ value: null, writable: true },
	isMoving:		{ value: false, writable: true }, // Is card moving?
	oldPosition:	{ value: [0,0], writable: true },	
	collision:		{ value: false, writable: true },
	slotElements: 	{ 
		value: ["slot-card-mascot-elements",
                 "slot-card-air-elements",
                 "slot-card-water-elements",
                 "slot-card-land-elements",
                 "slot-card-fire-elements"],
                 writable: false 
    },

	
	init: {
	
		value: function(id)  {
		
			this.container = new CAAT.Actor().setId(id);//container;
			this.container.enableDrag();
			this.initEvents();
						
		}, enumerable: false
	},
	
	setTagVisible: {
	
		value: function( value ) {
		
			this.tagVisible = value;
		}
	},
	
	initEvents: {
	
		value: function() {
		
			var container = this.container;
			var thisCard = this;
			
			this.container.mouseDown = function(event) {

				console.log("card mouseDown");
				Card['isMoving'] = true;
			}
		
			this.container.mouseEnter = function(event) {
			
				console.log("Card type: " + thisCard["elementType"]);

			}
			
			this.container.mouseUp = function(event) {

				console.log(container.id + " *** MOUSE UP ***");					
				Card['isMoving'] = false;
				
				// Get reference to EquipedCardsPanel
				var equipedCardsPanel = window['equiped_cards_panel'];
				var cardsOnHandPanel = window['cards_on_hand_panel'];
				
				// Convert card coordinates to EquipedCardsPanel coordinates
				var convertedPoint = container.modelToModel( 
					new CAAT.Point(0,0), 
					equipedCardsPanel.container 
				);

				// Check if card x,y position collides with EquipedCardsPanel area
				if (
					(convertedPoint.x >= equipedCardsPanel.container.x && 
					convertedPoint.x <= equipedCardsPanel.container.x + equipedCardsPanel.container.width) 
					&&
					(convertedPoint.y >= equipedCardsPanel.container.y && 
					convertedPoint.y <= equipedCardsPanel.container.y + equipedCardsPanel.container.height)
					) 
				{
					console.log("Card is over EquipedCardsPanel");					
					Card['collission'] = true;
					
					// Get card index to be equiped
					var cardIndex = container.id.split("_")[3];
								
					// Tell CardsOnHandPanel to delete cards from the right cell
					cardsOnHandPanel.freeCard( cardIndex );

					// Tell EquipedCardsPanel to equip this card but first of all
					equipedCardsPanel.equipCard( thisCard );
					
				} else {
					
					// No collision with any other panel so 
					// return to original position
					container.x = Card['oldPosition'][0]; 
					container.y = Card['oldPosition'][1]; 
					
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
