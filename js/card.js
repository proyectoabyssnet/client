/*
* CARD OBJECT
*/

var Card = {};

Object.defineProperties(Card, {

	cName:			{ value: "", writable: true },
	elementType: 	{ value: "", writable: true },
	tagVisible:		{ value: false, writable: true },
	bigImage: 		{ value: "bigImage.png", writable: true },
	container:		{ value: null, writable: true },
	isMoving:		{ value: false, writable: true }, // Is card moving?
	oldPosition:	{ value: [], writable: true },	
	collision:		{ value: false, writable: true },
	state:			{ value: "none", writable: true },
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
		
			this.container = new CAAT.Actor().setId(id);
			this.container.enableDrag();
			this.oldPosition = [0,0];
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

			this.container.__prev_mouseEnter = this.container.mouseEnter;
			
			this.container.mouseEnter = function(e) {
			
				this.__prev_mouseEnter.call( this, e );
				  
				// make your extra code here or previous to call __prev_mousedDown
				// function
				console.log("Extra code for mouseDown event");
				console.log(container.getId());
			};
						
			this.container.mouseUp = function(event) {
							
				// Get reference to EquipedCardsPanel
				var equipedCardsPanel = window['equiped_cards_panel'];
				var cardsOnHandPanel = window['cards_on_hand_panel'];		
				
				// Get panel which this card belongs to
				var panelWhereThisCardBelongsTo = container.parent.parent;
				
				console.log("??? " + container.parent.parent.parent.getId());
				
				if (panelWhereThisCardBelongsTo.getId() == "cards_on_hand_panel") {

					// Convert card coordinates to EquipedCardsPanel coordinates but
					// before doing this, find out who card's parent is				
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
								
						// Tell EquipedCardsPanel to equip this card but first of all
						equipedCardsPanel.equipCard( thisCard );
					
					} 
					else {
					
						// No collision with any other panel so 
						// return to original position
						thisCard.returnToSourcePosition();					
					}
				
				} else if (panelWhereThisCardBelongsTo.parent.getId() == "equiped_cards_panel") {
				
					var slotElement = container.parent.parent;
					var cardDisplayer = null;
					
					//console.log("slotElement: folding cards... ");
					
					if (thisCard.state == "unfolded") {
						
						window['card_details_panel'].setCard( thisCard );
						window['card_details_panel'].container.setVisible(true);
						
						var cardDisplayerId = "card-displayer-" + thisCard.elementType;
						var slotElementId = "card-" + thisCard.elementType + "-elements";
						
						equipedCardsPanel.cardDisplayers[ cardDisplayerId ]
							.foldCardsForSlot(
								equipedCardsPanel.slotElements[slotElementId]
							);
						
					} else {
						
						thisCard.returnToSourcePosition();
					}
										
				}
				else {
				
					thisCard.returnToSourcePosition();
				}
				
			}					
			
		}, enumerable: false
	},
	
	returnToSourcePosition: {
	
		value: function() {
		
				console.log("Returning card to old position...");
				this.container.x = this.oldPosition[0]; 
				this.container.y = this.oldPosition[1]; 
				
		}, enumerable: true
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
