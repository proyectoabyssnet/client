/*
* Show players stats
*/

var PlayerBrowser = Object.create( Panel );

Object.defineProperties( PlayerBrowser, {

	butNext:		{ value: null, writable: true },
	butPrevious:	{ value: null, writable: true },
	players:		{ value: [], writable: true },
	
	
	init: {
	
		value: function(id) {
			
			this.initPanel();

		
			var buttonSprite = new CAAT.SpriteImage()
				.initialize(window['director'].getImage('stars'),
				1,6);
				
			// Init buttons for navigation
			this.butNext = new CAAT.Actor();
			
			this.butNext.setAsButton(
					buttonSprite.getRef(),
					0,1,2,0, 
					function (button) {
			
						console.log("Next player");
					}
			);
						
			this.butPrevious = new CAAT.Actor();
			
			this.butPrevious.setAsButton(
					buttonSprite.getRef(),
					0,1,2,0, 
					function (button) {
			
						console.log("Previous player");
					}
			);			
			
			this.container.addChild( this.butPrevious );
			this.butPrevious.setLocation(1,1);
			this.container.addChild( this.butNext );
			this.butNext.setLocation( 
				this.butPrevious.x + this.butPrevious.width + 4, 
				this.butPrevious.y
			);
			
		}, enumerable: true
	}

		
});
