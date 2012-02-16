window.onload = init;

/*
*	INIT MAIN OBJECTS
*/
function init() {

	var canvasObject = document.getElementById('canvas1');
	
	if (!canvasObject) {		
		alert("Could not found canvas object");
		return;
	}
	
	// Create Director and assign canvas object
	var director = new CAAT.Director()
		.initialize(800,600, canvasObject)
		.setClear(false);

	// Load resources (images,...)
	loadImages(director);
}


function initGame(director) {

	var scene_1 = director.createScene()
		.setFillStyle('#000');
	
	// Create six squares (actors) 
	for (var i=0; i < 6; i++) {
		
		// 80x80 rectangles
		var s = 80;
		
		// Containers can contain other actors
		var _c1_container = new CAAT.ActorContainer().
			setBounds(i*100+10, 20, s, s).
			setRotation( Math.PI*2*Math.random()).
			setFillStyle('#ff0').
			enableDrag();
					
					
		_c1_container.name = 'rectangle' + i;
		_c1_container.mouseMove = mouseMoveHandler;
		
		scene_1.addChild(_c1_container);
	
		
		// White square acting as a container
		var _c1_container_child = new CAAT.Actor()
		        .setBounds(s/2,s/2,s/4,s/4)
		        .setRotation( Math.PI*2*Math.random() )
		        .setFillStyle('#00ff00')
		        .enableDrag();			           

		_c1_container_child.mouseDblClick = function( mouseEvent ) {
			this.setScale(1.2, 1.2);
		}
		
		// FOR TESTING BACKGROUND IMAGES ***
		if (i % 2 == 0) {
		
			var lifeImage = new CAAT.SpriteImage()
				.initialize(director.getImage('stars'), 1, 6);
			
			_c1_container_child.setBackgroundImage(
				lifeImage.getRef(), 
				true
			).setSpriteIndex(3);				
		}		
		
		// Add this container as a child of the previous created
		_c1_container.addChild(_c1_container_child);
		
		// Create button
		var button1 = createButton(director);
		scene_1.addChild(button1);
		
		
	}

	CAAT.loop(60);
}


var mouseMoveHandler = function(mouseEvent) {
	
	var actor = mouseEvent.source;	
	var logInfo = document.getElementById('logInfo');
	
	if (logInfo) {
		logInfo.innerHTML = actor.name;
	}
	
}


/* PRELOAD IMAGES */
function loadImages(director) {
	
	// Preload images
	new CAAT.ImagePreloader().loadImages(
		[
			{id:'card1',		url:'img/card1.jpg'},
			{id:'card2',		url:'img/card2.jpg'},
			{id:'life',			url:'img/life.png'},				
			{id:'stars',		url:'img/stars.png'},
			{id:'button',		url:'img/buttons.png'}
		],
		function(counter,images) {
			
			if (counter == images.length) {
				director.setImagesCache(images);
					
				// Images were loaded. It's time to init scene/s
				initGame(director);						
			}
		}
	);	

}


function createButton(director) {
	
	var buttonSprite = new CAAT.SpriteImage()
		.initialize(director.getImage('button'), 5, 1);
	
	var button = new CAAT.Actor().setAsButton(
		
		buttonSprite.getRef(), 0, 1, 3, 2, function(button) {
			
			console.log('button pressed');	
		}
	)
	.setLocation(100,300);
	
	return button;
}

