/*
* SLOT CONTAINING CARD/s
*/
var Slot = {};

Object.defineProperties(Slot, {

	isFree: 	{ value: true, writable: true },
	alphaValue: { value: 0.5, writable: true },
	MAX_CARDS: 	{ value: 0, writable: false },
	container:	{ value: null, writable: false },
	cards: 		{ value: [], writable: true },
	cellCover:	{ value: null, writable: true },
	butSprite:	{ value: null, writable: true },
	
	init: {
	
		value: function(id) {
			
			this.container = new CAAT.ActorContainer()
				.setId(id)
				.setAlpha(this.alphaValue);
				
			var cellCoverBackgroundImage = window['director'].getImage('cell-cover');
							
			this.butSprite = new CAAT.SpriteImage()
				.initialize(window['director'].getImage('cell-cover-sprite'),
				1,2);

			
			this.cellCover = new CAAT.Actor()
				.setAsButton(
					this.butSprite.getRef(),
					0,1,1,0, 
					function( button ) {
						console.log("Clicked over cellCover");
					}
				)
				.setVisible( false );

			
			//this.container.addChild( this.cellCover );
			
			this.cards = [];
		
		}, enumerable: true
	},

	setMaxCards: {
	
		value: function( numberOfCards ) {
	
			this.MAX_CARDS = numberOfCards;
		
		}, enumerable: true
	},
	
	addCard: { 
	
		value: function(card) {

				this.cards.push(card);
				this.container.addChild(card.container);
				card.container.setLocation(1,1);
				
				if (this.cards.length == 2) {
					console.log("Current cards location: " +
					this.cards[0].container.x + "-" +
					this.cards[1].container.x
					);
							
					this.cards[0].container.setLocation(0,0);
					this.cards[1].container.setLocation(8,5);	
				/*								
					var cardsParent = this.cards[1].container.parent;
					this.container.addChild( this.cellCover );
					//cardsParent.setZOrder(this.cards[1].container, 5);
					this.cellCover.setVisible(true);
					this.cellCover.mouseUp = function( event ) {
					
						console.log("Showing cards inside this cell");
					}
				*/
				}
		
		}, enumerable: true
	}
	
});
