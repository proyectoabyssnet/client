/*
* EQUIPED CARDS PANEL OBJECT
*/
		
var EquipedCardsPanel = Object.create( Panel );

Object.defineProperties(EquipedCardsPanel, { 

	MAX_SLOT_ELEMENTS: 	{ value: 5, writable: true }, // Number of elements (land, air,...)
	CELL_PADDING: 		{ value: 2, writable: true }, // Separating between cell and borders
	CELL_LEFT_MARGIN: 	{ value: 10, writable: true }, // Horizontal separation
	SLOT_PADDING: 		{ value: 2, writable: true }, // Vertical separation between slots
	slotElementSize: 	{ value: [0,0], writable: true }, // width, height
	cells:				{ value: [], writable: true }, // Cells inside elements
	selected:			{ value: false, writable: true }, // Used to select panel1
	slotBackgroundImages: { 
		value: ["card-mascot-elements",
				 "card-air-elements",
				 "card-water-elements",
				 "card-land-elements",
				 "card-fire-elements"],
			writable: false
	},
	// Object to show equiped cards for each slot element
	cardsDisplayer: { value: {}, writable: true },
	
	// Each slot contains two cells
    slotElements: { 
    	value: { 
    		"card-mascot-elements":		[null,null],
    		"card-air-elements": 		[null,null],
    		"card-water-elements":		[null,null],
    		"card-fire-elements":		[null,null],
    		"card-land-elements":		[null,null]
    	},
    	writable: true
    },
				 
	init: {
	
		value: function() {
			
			this.MAX_SLOT_ELEMENTS = 5; // Number of elements (land, air,...)
			this.CELL_PADDING = 2; // Separating between cell and borders
			this.CELL_LEFT_MARGIN = 10; // Horizontal separation
			this.SLOT_PADDING = 2; // Vertical separation between slots
			this.slotElementSize = [0,0]; // width, height

		}, writable: false
	
	}, // end init

	getCells: {
	
		value: function() {
			
			return this.cells;
		
		}, enumerable: true
	},
	
	initElementSlots: {
	
		value: function() {
					
			var nextSlotY = this.container.y;
	
			// Get first image to read it's size
			var image = window['director'].getImage(this.slotBackgroundImages[0]);
			this.slotElementSize[0] = image.width;
			this.slotElementSize[1] = image.height;
			
			var maxNumberOfCards = 2;
			var slotElementBackground = "";
			var slotElement = null;
			var cells = null;
			var element = 0;
			var cDisplayer = null;
			
			for(; element < this.MAX_SLOT_ELEMENTS; element++) {
						
				maxNumberOfCards = 2; // Cards per slot
				slotElementBackground = this.slotBackgroundImages[element];
			
				slotElement = new CAAT.ActorContainer();

				slotElement.setBounds(
						this.container.x,
						nextSlotY,
						this.slotElementSize[0], // width
						this.slotElementSize[1] // height
						)
					.setBackgroundImage(
							window['director'].getImage(slotElementBackground)
							)
					.setId("slot-" + this.slotBackgroundImages[ element ]);
																		
				var elementId = this.slotBackgroundImages[ element ];
							
				// Create 2 cells
				cells = this.createCells(2);
				cells[0]["name"] = "cell_0_" + elementId;
				cells[1]["name"] = "cell_1_" + elementId;				
			
				// Add cells to slot element (containers only)
				slotElement.addChild(cells[0].container); // Left cell
				slotElement.addChild(cells[1].container); // Right cell						

				// Store cells (Object) inside each slot				
				this.slotElements[elementId][0] = cells[0];
				this.slotElements[elementId][1] = cells[1];								
					
				/*
				* Create a card displayer for each slot
				*/
				cDisplayer = Object.create(CardsDisplayer);
				cDisplayer.init("card_displayer_" + element);
				slotElement.addChild( cDisplayer.container );			
				cDisplayer.container.setPosition(
					slotElement.width-30, 
					cDisplayer.container.y
					)
					.setId(slotElement.getId() + "-cd") // -cd: card displayer
					.setVisible(false);
					
				console.log("Setting id for cardDisplayer: " + cDisplayer.container.getId());
										
				// Add slot element to panel
				this.addSlotElement(slotElement);							
					
				// Calculate Y position for next slot element
				nextSlotY += this.slotElementSize[1] + this.SLOT_PADDING;
			
				slotElement = null;
				
			} // end for
			
		}, enumerable: false
	},

	equipCard: {
	
		value: function( card ) {
			
			console.log("Current card x,y: " + card.container.x + "," +
				card.container.y);
				
			// What sort of card is it? (land, air,...)
			var cardType = card.elementType;

			// Ok, got it. Now find out if slotElement contains a free cell for
			// this card
			var slotElementId = "card-" + cardType + "-elements";		
			console.log("Getting reference to slot: " + slotElementId);
			var slotElementCell = this.slotElements[slotElementId];
			
			var cardParent = card.container.parent;

			if (slotElementCell[0].isFree == true) {
				
				// Remove current parent relationship (cards_on_hand_panel, 
				// equiped_cards_panel,...)
				cardParent.removeChild( card.container );
				
				// Put card inside cell 1
				slotElementCell[0].addCard( card );					
				
				if (slotElementCell[0].cards.length == slotElementCell[0].MAX_CARDS) {
					slotElementCell[0].isFree = false;
					// Set card-displayer to visible
					var cardDisplayer = cardParent.parent.findActorById(cardParent.parent.getId() + "-cd");

					if (cardDisplayer != null) {
						
						cardDisplayer.setVisible( true );
					}
				}
					
			} else if (slotElementCell[1].isFree == true) {
					
				cardParent.removeChild( card.container );
				
				// Put card inside cell 2
				slotElementCell[1].addCard( card );				
				
				if (slotElementCell[1].cards.length == slotElementCell[1].MAX_CARDS)
					slotElementCell[1].isFree = false;				
								
			} else {
				
				card.returnToSourcePosition();
			}
						
		},
		enumerable: true
	},
	
	addSlotElement: {
	
		value: function(slotElement) {
			
			this.container.addChild(slotElement);

		}, enumerable: true
			
	}, // end addSlotElement

	

	createCells: {
	
		value: function(numberOfCells) {
		
			// Array containing cells
			var cells = []; // Store Slot objects
			var xPosition = 0;
			var yPosition = 0;
			
			// Create slots containing cards inside each slot element
			// p.e.: land element has 2 slots containing 2 cards each slot
			var nextCellXPosition = xPosition + this.SLOT_PADDING;
			yPosition += this.SLOT_PADDING;
			
			var cell = null;
			var slotCell = 0;
			
			for( ; slotCell < numberOfCells; slotCell++) {
			
				cell = Object.create(Slot);				
				cell.init("ecp_cell_" + slotCell);
				cell["name"] = "Cell_" + slotCell;
				cell.setMaxCards(2); // Cell can store 2 cards
				cell.container.setBounds(
					nextCellXPosition,	
					yPosition,
					50, 
					70)
					.setFillStyle("#aabb00");
				

				// Calculate x position for the cell placed
				// to the right side
				nextCellXPosition += 50 + 
					this.CELL_PADDING + 
					this.CELL_LEFT_MARGIN;

				cells.push(cell);
				cell = null;
			}	
			
			return cells;
		
		}, writable: false
		
	} // end createCells

}); // end EquipedCardsPanel object


/*
* Object to display all cards contained in a slotElement
*/
var CardsDisplayer = {};

Object.defineProperties( CardsDisplayer, {
	
	container: { value: null, writable: true },
	
	init: {
		
		value: function(id,x,y) {
									
			/*
			this.container = new CAAT.Actor()
				.setId(id)
				.setSize(30,60)
				.setFillStyle("#00ff00");		
			*/
										
			var buttonSprite = new CAAT.SpriteImage()
				.initialize(window['director'].getImage('stars'),
				1,6);

			
			var actorButton = new CAAT.Actor()
				.setAsButton(
					buttonSprite.getRef(),
					0,1,2,0, 
					function( button ) {
					
						console.log("Clicked over button");
					}
				);
				
			this.container = actorButton;
						
		}, enumerable: true
	},
	
	displayCardsForSlot: {
	
		value: function(slotElement) {
			
			var numberOfCards = 0;
			var cardContainer = null;
			var nextCardPosition = this.container.x;
			var cardPadding = 4;
			
			// Run through cells
			for (var cell = 0; cell < 2; cell++) {
			
				numberOfCards = slotElement.cells[cell].cards.length;
				
				// Run through list of cards contained in a cell
				for (var card = 0; card < numberOfCards; card++) {
					 
					 // Display cards horizontally
					 cardContainer = slotElement.cells[cell].cards[card].container;
					 cardContainer.setLocation(
					 	nextCardPosition, 
					 	this.container.y
					 );
					 
					 nextCardPosition += cardContainer.width + cardPadding;
				}
			}
			
		}, enumerable: true
	}
});
