/*
* Card actions (detach, equip)
*/

var CardActions = {};

Object.defineProperties( CardActions, {

	container:		{ value: null, writable: true },
	equipAction:	{ value: null, writable: true },
	detachAction:	{ value: null, writable: true },
	
	init: {
	
		value: function(card) {
		
			this.container = new CAAT.ActorContainer()
				.setSize(60,20);
				
			this.detachAction = new CAAT.Actor();
			this.equipAction = new CAAT.Actor();
						
			var buttonSprite = new CAAT.SpriteImage()
				.initialize(window['director'].getImage('stars'),
				1,6);
				
						
			this.detachAction.setAsButton(
					buttonSprite.getRef(),
					0,1,3,0, 
					function (button) {
			
						console.log("Detach card action");
						window['card_details_panel'].container.setVisible(false);
						window['detached_cards_panel'].detachCard( card );
					}
			);
			
			this.equipAction.setAsButton(
					buttonSprite.getRef(),
					4,2,3,0, 
					function (button) {
			
						console.log("Equip card");
						if (card.container.parent.parent.getId() != "equiped_cards_panel") 
							window['equiped_cards_panel'].equipCard(card);
						
						window['card_details_panel'].container.setVisible(false);						
					}
			);							
						
			this.container.addChild( this.equipAction );			
			this.container.addChild( this.detachAction );
			this.equipAction.setLocation(1,1);
			this.detachAction.setLocation(1 + this.equipAction.width, 1);
			
		}, enumerable: true
	}

});
