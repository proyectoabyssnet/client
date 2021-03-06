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
	cardsDisplayer: 	{ value: {}, writable: true }, // Object to show equiped cards for each slot element		
	elements:			{ value: [ "mascot", "air", "water", "land", "fire"],  writable: true },
	cardDisplayers:		{ 
	
		value: {			
			"card-displayer-mascot":	null,
			"card-displayer-air": 		null,
			"card-displayer-water":		null,
			"card-displayer-land": 		null,
			"card-displayer-fire": 		null
			
		}, writable: true 
		
	},
	slotBackgroundImages: { 
		value: ["card-mascot-elements",
				 "card-air-elements",
				 "card-water-elements",
				 "card-land-elements",
				 "card-fire-elements"],
			writable: false
	},

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
			
			this.initPanel();
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
	
	emptyCells: {
	
		value: function() {
			
			var element = 0;
			var slotElement = null;
			var CELL_1 = 0;
			var CELL_2 = 1;
			var elementId = "";
			
			for (; element < this.MAX_SLOT_ELEMENTS; element++) {
				
				elementId = "card-" + this.elements[element] + "-elements";
				slotElement = this.slotElements[elementId];
				slotElement[CELL_1].container.emptyChildren();						
				slotElement[CELL_1].cards = [];
				slotElement[CELL_1].isFree = true;
				slotElement[CELL_2].container.emptyChildren();				
				slotElement[CELL_2].cards = [];
				slotElement[CELL_2].isFree = true;			
			}
			
		}, enumerable: true
	},
	
	initElementSlots: {
	
		value: function() {
					
			var nextSlotY = 2;
	
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
			var slotId = "";
			var cardDisplayerId = "";
			
			for(; element < this.MAX_SLOT_ELEMENTS; element++) {
						
				maxNumberOfCards = 2; // Cards per slot
				slotElementBackground = this.slotBackgroundImages[element];
			
				slotElement = new CAAT.ActorContainer();

				slotElement.setSize(
						this.slotElementSize[0], // width
						this.slotElementSize[1] // height
						)
					.setLocation(1, nextSlotY)
					.setBackgroundImage(
							window['director'].getImage(slotElementBackground)
							)
					.setId("slot-" + this.slotBackgroundImages[ element ]);
																		
				var elementId = this.slotBackgroundImages[ element ];
							
				// Create 2 cells (slots)
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
				cDisplayer.init(
					"card_displayer_" + element,  // id
					elementId, // slot witch belongs to
					slotElement.width - 30, // x
					0 // y
				);
				slotElement.addChild( cDisplayer.container );			
				cDisplayer.container
					.setId(slotElement.getId() + "-cd") // -cd: card displayer
					.setVisible(false);
				
				// Store cardDisplayer object
				cardDisplayerId = "card-displayer-" + this.elements[element];
				this.cardDisplayers[ cardDisplayerId ] = cDisplayer;
				
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
			
			
			if (card.container.parent != null) {
				console.log("WARNING: " + card.container.getId() +
							" belongs to " + card.container.parent.parent.getId());
				var cardParent = card.container.parent;
				cardParent.removeChild(card.container);
				card.container.setParent(null);		
			}
			
			
			// What sort of card is it? (land, air,...)
			var cardType = card.elementType;

			// Ok, got it. Now find out whether the slotElement contains a free cell for
			// this card
			var slotElementId = "card-" + cardType + "-elements";		
			var slotElementCell = this.slotElements[slotElementId];			
			var cardParent = card.container.parent; // Cell where it belongs to

			if (slotElementCell[0].isFree == true) {
				
				// Remove current parent relationship (cards_on_hand_panel, 
				// equiped_cards_panel,...) whether exists
				if (cardParent != null) {
					cardParent.removeChild( card.container );
				}
												
				// Put card inside cell 1
				card.slotIndex = 0;
				card.state = "equiped";				
				slotElementCell[0].addCard( card );					
		
				if (slotElementCell[0].cards.length == slotElementCell[0].MAX_CARDS) {
				
					slotElementCell[0].isFree = false;
					
					// Find cardDisplayer and set it to visible
					if (cardParent != null) {
						var cardDisplayer = cardParent.parent
											.findActorById(cardParent.parent.getId() + "-cd");
					} else {
						
						var cardDisplayer = window['equiped_cards_panel'].container
											.findActorById('card-displayer-' + 
											card.elementType);
						
					}

					if (cardDisplayer != null) {						
						cardDisplayer.setVisible( true );
					}
				}
					
			} else if (slotElementCell[1].isFree == true) {
					
				if (cardParent != null) {
					cardParent.removeChild( card.container );
				}
				
				// Put card inside cell 2
				card.slotIndex = 1;
				card.state = "equiped";
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
				cell.slotIndex = slotCell;
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
	
