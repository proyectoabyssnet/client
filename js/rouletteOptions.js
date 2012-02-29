/*
* ROULETTE OPTIONS FOR PLAYER
*/

function RouletteOptions() {
	
	/* PROPERTIES */
	
	this.backgroundImage = null;
	this.optionLabels = new Array(5);
	
	
	/* METHODS */
	
	this.initRoulette = function( director ) {
		
		this.initPanel();
		
		this.backgroundImage = director.getImage( "roulette" );
		var width = this.backgroundImage.width;
		var height = this.backgroundImage.height;
		
		// Image with pentagons
		this.container.setBackgroundImage( this.backgroundImage )
			.setSize( width, height )
			.setLocation(director.canvas.width - width, 1);
		
		this.initOptionLabels();
	}
	
	// Convert degrees to radians
	this.deg2rad = function(degrees) {
		
		var radians = (2 * Math.PI * degrees) / 360;
		return radians;
	}
	
	this.initOptionLabels = function() {
		
		var centerX = this.backgroundImage.width / 2;
		var centerY = this.backgroundImage.height / 2;
		var radius = 90;
		var step = -135; // Position for option 1
		
		for(var label=0; label < 5; label++) {
		
			var positionX = centerX + Math.cos(this.deg2rad(step)) * radius;
			var positionY = centerY + Math.sin(this.deg2rad(step)) * radius;
					
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
		
	}
}

RouletteOptions.prototype = new Panel;
