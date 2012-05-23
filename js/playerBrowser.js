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
	}

		
});
