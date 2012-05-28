/*
*  Card details (description, image, action buttons)
*/

var CardDetails = Object.create( Panel );

Object.defineProperties( CardDetails, {

	actions:		{ value: null, writable: true },
	description:	{ value: null, writable: true },
	image:			{ value: null, writable: true },
	padding:		{ value: 10, writable: true },
	
	init: {
	
		value: function() {
		
			this.initPanel();
			this.container.setVisible(false);
			
			//var cardId = id;
			var cardId = "card1";
			var cardImg = window['director'].getImage(cardId + "-img-big");
			this.image = new CAAT.Actor()
				.setSize(cardImg.width, cardImg.height)
				.setBackgroundImage( cardImg );
				
			this.actions = Object.create( CardActions );
			this.actions.init();
			
			this.description = new CAAT.TextActor()
				.setFont(this.titleFont)
				.setText("This is the description for card.")
				.setTextAlign("left")
				.setAlign("left")
				.setTextFillStyle("#fff")
				.setTextBaseline("left");	
							
			this.container.addChild(this.image);
			this.image.setLocation(1,1);
			this.container.addChild(this.description);
			this.description.setLocation(1, this.image.y + this.image.height + this.padding);
			this.container.addChild(this.actions.container);
			this.actions.container.setLocation(this.image.x + this.image.width, 1);
			
			// Reset panel size
			this.container.setSize(
				cardImg.width + this.actions.container.width, 
				cardImg.height + this.description.height
			);
			
			var posX = (window['director'].width / 2) - (this.container.width / 2);
			var posY = (window['director'].height / 2 ) - (this.container.height / 2 );

			this.container.setPosition(posX,posY);			
			
		}, enumerable:true
	}
});
