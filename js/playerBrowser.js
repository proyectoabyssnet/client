/*
* Show players stats
*/

var PlayerBrowser = Object.create( Panel );

Object.defineProperties( PlayerBrowser, {

	butNext:		{ value: null, writable: true },
	butPrevious:	{ value: null, writable: true },
	players:		{ value: [], writable: true },
	atkLabel:		{ value: "", writable: true },
	defLabel:		{ value: "", writable: true },			
	atkValue:		{ value: 0, writable: true },
	defValue:		{ value: 0, writable: true },	
	currentPlayer:	{ value: 0, writable: true },	
	
	init: {
	
		value: function(id) {
			
			this.initPanel();

		
			var buttonSprite = new CAAT.SpriteImage()
				.initialize(window['director'].getImage('stars'),
				1,6);
				
			// Init buttons for navigation
			this.butNext = new CAAT.Actor();
			
			var thisObject = this;
			
			this.butNext.setAsButton(
					buttonSprite.getRef(),
					0,1,2,0, 
					function (button) {
			
						thisObject.nextPlayer();
					}
			);
						
			this.butPrevious = new CAAT.Actor();
			
			this.butPrevious.setAsButton(
					buttonSprite.getRef(),
					0,1,2,0, 
					function (button) {
			
						thisObject.previousPlayer();
					}
			);			
			
			this.atkLabel = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("ATK")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(1,25);
							
			this.atkValue = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("0")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(35,25);
			
			this.defLabel = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("DEF")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(50,25);
							
			this.defValue = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("0")
				.setTextAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("bottom")
				.setLocation(85,25);
							
			this.container.addChild( this.atkLabel );
			this.container.addChild( this.atkValue );
			this.container.addChild( this.defLabel );
			this.container.addChild( this.defValue );
			this.container.addChild( this.butPrevious );
			this.container.addChild( this.butNext );
			this.butPrevious.setLocation(100, 1);
			this.butNext.setLocation(this.butPrevious.x + this.butPrevious.width, 1);
			
			// Reset panel size
			var panelWidth = this.atkLabel.width + this.atkValue.width +
				this.defLabel.width + this.defValue.width + this.butPrevious.width +
				this.butNext.width + 30;
				
			var panelHeight = this.atkLabel.height + 10;
				
			this.container.setSize(panelWidth, panelHeight);
			
		}, enumerable: true
	},
	
	nextPlayer: {
	
		value: function() {
			
			this.currentPlayer++;
			
			if (this.currentPlayer >= this.players.length)
				this.currentPlayer = 0;
				
			this.setTitle("Player: " +
				this.players[this.currentPlayer].playerName );
							
			console.log("Next player: " + 
				this.players[this.currentPlayer].playerName)
						
			this.showPlayerCards(this.players[this.currentPlayer]);
						
		}, enumerable: true
	},
	
	previousPlayer: {
	
		value: function() {
			
			this.currentPlayer--;
			
			if (this.currentPlayer < 0)
				this.currentPlayer = this.players.length - 1;
			
			this.setTitle( "Player: " + 
				this.players[this.currentPlayer].playerName );
			
			console.log("Previous player: " + 
				this.players[this.currentPlayer].playerName)				
														
			this.showPlayerCards(this.players[this.currentPlayer]);
			
		}, enumerable: true
	},
		
	loadPlayers: {
	
		value: function(players) {
			
			this.players = players;
			
		}, enumerable: true
	},

	showPlayerCards: {
	
		value: function(player) {
			
			var i = 0;
			var equipedCardsPanel = window['equiped_cards_panel'];
			var cardType = null;
			
			equipedCardsPanel.emptyCells(); // Delete all cards from the panel
			console.log("Showing (equip) equiped cards for player: " + player.playerName);
							
			for (i=0; i < player.equipedCards.length; i++) {
				
				//equipedCardsPanel.equipCard(equipedCards[i]);
				
			}
			
		}, enumerable: true
	}
		
});
