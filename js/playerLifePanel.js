/*
* PLAYER LIFE PANEL
*/
var PlayerLifePanel = Object.create( Panel ); 
	
	
Object.defineProperties( PlayerLifePanel, {
	
	LIFE_SLOTS: { value: 5, writable: true },
	container: { value: new CAAT.ActorContainer(), writable: true },
	bgImage: { value: "life-panel-bg", writeble: false },
	playerAvatar: { value: "", writable: true },
	
	
	init: {
		value: function( x, y, width, height) {
		
		this.initPanel();
		this.container.setBounds(x, y, width, height)
		.setFillStyle("#ff0000")
		.setBackgroundImage(window['director'].getImage(this.bgImage));	
		
		}, enumerable: false	
	},
	
	initLifeImages: {
	 
		value: function() {
		
			var centerX = this.container.width / 2;
			var centerY = this.container.height / 2;
			var paddingCorrection = 5;
			var step = 0.5; // Distance between life images
			var width = this.container.width;
			var height = this.container.height;
			var radius = 45;
		
			// Create five actors (hearts) representing player lifes
			for(var i = 0; i < 5; i++) {
			
				var positionX = centerX + Math.cos(step) * radius - paddingCorrection;
				var positionY = centerY + Math.sin(step) * radius - paddingCorrection;
			
				var lifeImage = new CAAT.Actor()
					.setBounds(positionX, positionY, 26, 24)
					.setBackgroundImage(window['director'].getImage("life"));
				
				this.container.addChild(lifeImage);
			
				step += -0.4;
			}
			}, enumerable: false
	},
	
	setPlayerImage: {
		
		value: function( imageName) {
		
			var image = window['director'].getImage(imageName);	
			var xPosition = this.container.x + image.width / 2;
			var yPosition = this.container.y + image.height / 2;
		
			// Add player image as an Actor
			this.playerAvatar = new CAAT.Actor()
				.setBounds(1, 1, xPosition, yPosition)
				.setBackgroundImage(image)
				.setAlpha(1);
		
			this.container.addChild(this.playerAvatar);		
			
		}, enumerable: false
	}

});
