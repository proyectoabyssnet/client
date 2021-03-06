/*
* Object to display all cards contained in a slotElement
*/

var CardsDisplayer = {};

Object.defineProperties( CardsDisplayer, {
	
	slotId:		{ value: "<empty>", writable: true },
	container:	{ value: null, writable: true },
	
	position:	{ value: [0,0], writable: true },
	state:		{ value: "", writable: true },
	
	init: {
		
		value: function(id, slotId, x, y) {
													
			this.slotId = slotId;
			this.state = "folded";
				
			var buttonSprite = new CAAT.SpriteImage()
				.initialize(window['director'].getImage('stars'),
				1,6);

			
			this.container = new CAAT.Actor().setPosition(x,y);	
			this.position[0] = this.container.x;
			this.position[1] = this.container.y;
			var cont = this.container;	
			var slotId = this.slotId;	
			var unfoldCardsFunction = this.unfoldCardsForSlot;
			var foldeCardsFunction = this.foldCardsForSlot;
			var state = this.state;
			
			this.container.setAsButton(
					buttonSprite.getRef(),
					0,1,2,0, 
					function (button) {
					
						// Access to cells and display contained cards
						
						var equipedCardsPanel = window['equiped_cards_panel'];
						
						if (equipedCardsPanel != null) {
							
							var startX = equipedCardsPanel.container
								.findActorById("slot-" + slotId).width;
							
							if (state == "folded") {

								unfoldCardsFunction(
									equipedCardsPanel.slotElements[slotId],
									startX
								);	
								
							} else {
								foldCardsForSlot(equipedCardsPanel.slotElements[slotId]);
							}													
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
			var nextCardPositionY = 0;//slotElement[0].cards[0].container.y;
			var cardPadding = 4;
			
			// Run through cells
			for (var cell = 0; cell < 2; cell++) {

				numberOfCards = slotElement[cell].cards.length;

				// Run through list of cards contained in a cell
				for (var card = 0; card < numberOfCards; card++) {
					 
					 if (slotElement[cell].cards[card] != null) {
					 
						 // Display cards horizontally
						 cardContainer = slotElement[cell].cards[card].container;
						 
						 // Card is unfolded like the other ones
						 slotElement[cell].cards[card].state = "unfolded";
						 
						 cardContainer.setLocation(
						 	nextCardPositionX, 
						 	nextCardPositionY
						 );
						 
						 console.log("Displaying card: " + 
						 	cardContainer.getId() +
						 	", x =  " + nextCardPositionX) + 
						 	" with state " +
						 	slotElement[cell].cards[card].sate;
						 						
						 nextCardPositionX += cardContainer.width + cardPadding;
					}
				}								
			}
			
			this.state = "unfolded";
			
		}, enumerable: true
	},
	
	foldCardsForSlot: {
	
		value: function( slotElement ) {
		
			var cardContainer = null;
			var oldX = 0;
			var oldY = 0;
			
			for (var cell = 0; cell < 2; cell++) {
				
				numberOfCards = slotElement[cell].cards.length;
				
				for (var card = 0; card < numberOfCards; card++) {
					
					if (slotElement[cell].cards[card] != null) {
					
					console.log(slotElement[cell].cards[card].container.getId());
					// Get previous position and set it
					oldX = slotElement[cell].cards[card].oldPosition[0];
					oldY = slotElement[cell].cards[card].oldPosition[1];										
					cardContainer = slotElement[cell].cards[card].container;					
					cardContainer.setLocation(oldX, oldY);
					
					// Set card state as "folded"
					slotElement[cell].cards[card].state = "folded";
					
					}
				}
			}	
			
			this.state = "folded";
			
		}, enumerable: true
	}
	
	
});
