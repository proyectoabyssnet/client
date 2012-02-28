/*
* ROULETTE OPTIONS FOR PLAYER
*/

function RouletteOptions() {
	
	/* PROPERTIES */
	
	this.image = "";
	this.optionLabels = new Array(5);
	
	
	/* METHODS */
	
	this.initRoulette = function( director ) {
		
		var image = director.getImage( "roulette" );
		var width = image.width;
		var height = image.height;
		
		// Image with pentagons
		this.container.setBackgroundImage( image )
			.setSize( width, height )
			.setLocation(director.canvas.width - width, 1);
		
		this.initOptionLabels();
	}
	
	this.initOptionLabels = function() {
		
		var centerX = this.image.width / 2;
		var centerY = this.image.height / 2;
		var radius = 45;
		var step = 0.5;
		
		for(var label=0; label < 5; label++) {
		
			var positionX = centerX + Math.cos(step) * radius;
			var positionY = centerY + Math.sin(step) * radius;
					
			this.optionLabels[ label ] = new CAAT.TextActor()
				.setFont("14px sans-serif")
				.setText("label_" + label)
				.setTextFillStyle("#00ff00")
				.setTextAlign("left")
				.setTextBaseline("bottom")
				.setLocation(positionX, positionY);
			
			this.container.addChild( this.optionLabels[ label ] );
			
			step += -0.4;			
		}
		
	}
}

RouletteOptions.prototype = new Panel;
