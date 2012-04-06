/*
* ROULETTE OPTIONS FOR PLAYER
*/

var RouletteOptions = Object.create( Panel );

Object.defineProperties( RouletteOptions, {
	
	backgroundImage: { value: null, writable: true },
	optionLabels: { value: new Array(5), writable: true },

	initRoulette: {
		value: function( ) {
		
			this.initPanel();
		
			this.backgroundImage = window['director'].getImage( "roulette" );
			var width = this.backgroundImage.width;
			var height = this.backgroundImage.height;
		
			// Image with pentagons
			this.container.setBackgroundImage( this.backgroundImage )
				.setSize( width, height )
				.setLocation(window['director'].canvas.width - width, 1);
		
			this.initOptionLabels();
		}, enumerable: false
	},
	
	// Convert degrees to radians
	deg2rad: {
		value: function(degrees) {
		
			var radians = (2 * Math.PI * degrees) / 360;
			return radians;
			
		}, enumerable: true
	},
	
	initOptionLabels: {
		value: function() {
		
			var centerX = this.backgroundImage.width / 2;
			var centerY = this.backgroundImage.height / 2;
			var radius = 90;
			var step = -135; // Position for option 1
			var positionX = 0;
			var positionY = 0;
		
			for(var label=0; label < 5; label++) {
		
				positionX = centerX + Math.cos(this.deg2rad(step)) * radius;
				positionY = centerY + Math.sin(this.deg2rad(step)) * radius;
					
				this.optionLabels[ label ] = new CAAT.TextActor()
					.setFont("14px sans-serif")
					.setText("option_" + label)
					.setTextFillStyle("#00ff00")
					.setTextAlign("left")
					.setTextBaseline("bottom");

				this.optionLabels[ label ].setLocation(
					positionX - this.optionLabels[ label ].width / 2,
					positionY
				);
			
				this.container.addChild( this.optionLabels[ label ] );
			
				step += 75;			
			}
			
		}, enumerable: false
	}

});
