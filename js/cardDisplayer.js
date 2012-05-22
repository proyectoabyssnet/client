/*
* Object to display all cards contained in a slotElement
*/

var CardsDisplayer = {};

Object.defineProperties( CardsDisplayer, {
	
	slotId:		{ value: "<empty>", writable: true },
	container:	{ value: null, writable: true },
	position:	{ value: [0,0], writable: true },
	
	init: {
		
		value: function(id, slotId, x, y) {
													
			this.slotId = slotId;
								
			var buttonSprite = new CAAT.SpriteImage()
				.initialize(window['director'].getImage('stars'),
				1,6);

			
			this.container = new CAAT.Actor().setPosition(x,y);	
			this.position[0] = this.container.x;
			this.position[1] = this.container.y;
			var cont = this.container;	
			var slotId = this.slotId;	
			var unfoldCardsFunction = this.unfoldCardsForSlot;
			
			this.container.setAsButton(
					buttonSprite.getRef(),
					0,1,2,0, 
					function (button) {
					
						// Access to cells and display contained cards
						
						var equipedCardsPanel = window['equiped_cards_panel'];
						
						if (equipedCardsPanel != null) {
							
							var startX = equipedCardsPanel.container
								.findActorById("slot-" + slotId).width;
								
							unfoldCardsFunction(
								equipedCardsPanel.slotElements[slotId],
								startX
							);														
						}
					}
				);
			
						
		}, enumerable: true
	},
	
	unfoldCardsForSlot: {
	
		value: function(slotElement, startX) { 
			
			var numberOfCards = 0;
			var cardContainer = null;
			var nextCardPositionX = startX; //slotElement[0].cards[0].container.x;
			var nextCardPositionY = slotElement[0].cards[0].container.y;
			var cardPadding = 4;
			
			// Run through cells
			for (var cell = 0; cell < 2; cell++) {

				numberOfCards = slotElement[cell].cards.length;
				
				// Run through list of cards contained in a cell
				for (var card = 0; card < numberOfCards; card++) {
					 
					 // Display cards horizontally
					 cardContainer = slotElement[cell].cards[card].container;
					 
					 cardContainer.setLocation(
					 	nextCardPositionX, 
					 	nextCardPositionY
					 );
					 
					 console.log("Displaying card: " + cardContainer.getId() +
					 	+ ", x =  " + nextCardPositionX);
					 						
					 nextCardPositionX += cardContainer.width + cardPadding;

				}				
				
			}
			
		}, enumerable: true
	},
	
	foldCardsForSlot: {
	
		value: function( slotElement ) {
		
			var cardContainer = null;
			var oldX = 0;
			var oldY = 0;
			
			for (var cell = 0; cell < 2; cell++) {
				
				for (var card = 0; card < 2; card++) {
					
					// Get previous position
					oldX = slotElement[0].cards[card].oldPosition[0];
					oldY = slotElement[0].cards[card].oldPosition[1];	
									
					cardContainer = slotElement[0].cards[card].container;
					
					cardContainer.setLocation(oldX, oldY);
				}
			}
			
		}, enumerable: true
	}
	
	
});
