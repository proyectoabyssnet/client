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
	window['director'] = new CAAT.Director()
		.initialize(800,600, canvasObject)
		.setClear(false);
	
	// Load resources (images,...)
	loadImages();
}

/* INIT GAME */

function initGame() {

	var scene_1 = window['director'].createScene()
		.setFillStyle('#000');
		
	/* CREATE GAME UI OBJECTS */

	window['equiped_cards_panel'] = createEquipedCardsPanel();
	scene_1.addChild(window['equiped_cards_panel'].container);

	var playerLifePanel = createPlayerLifePanel();
	scene_1.addChild(playerLifePanel.container);
	
	var cardsOnHandPanel = createCardsOnHandPanel();
	scene_1.addChild(cardsOnHandPanel.container);
	
	var atkDefPanel = createAtkDefPanel();
	scene_1.addChild(atkDefPanel.container);
			
	var rouletteOptions = createRouletteOptions();
	scene_1.addChild(rouletteOptions.container);
	
	
	// Create cards
	scene_1.enableInputList(4);	// panel and numberOfCards
		
	var card = null;
	var cardIndex = 0;
	var numberOfCards = 5;
	
	for(; cardIndex < numberOfCards; cardIndex++) {
	
		card = Object.create( Card );	
		
		Object.defineProperty(card, "container", {
			value: null,
			writable: true
		});
		
		card.initCard(
			new CAAT.Actor().setId("card_on_hand_" + cardIndex) 
		);
		
		card.setElementType("air");
		card.setImage("card1-small");
		
		cardsOnHandPanel.addCard( card );
		
		scene_1.addActorToInputList(card.container, cardIndex);			
	}

	scene_1.addActorToInputList(cardsOnHandPanel.container, cardIndex + 1);

	CAAT.loop(60);
}

/* END INIT GAME */


function createEquipedCardsPanel() {
	
	var equipedCardsPanel = Object.create( EquipedCardsPanel );
	equipedCardsPanel.initPanel();
	equipedCardsPanel.setTitle("Equiped cards");	
	equipedCardsPanel.container.setLocation(10,10)
		.setSize(100,400)
		.setAlpha(0.5)
		.setId("equiped_cards_panel");

	equipedCardsPanel.container.setId("equiped_cards_panel");
	equipedCardsPanel.initElementSlots();
	
	return equipedCardsPanel;
}

function createPlayerLifePanel() {
	
	// Player life panel
	var playerLifePanel = Object.create( PlayerLifePanel );
	var canvasWidth = window['director'].canvas.width;
	var canvasHeight = window['director'].canvas.height;
	
	playerLifePanel.container.setId("player_life_panel");
	playerLifePanel.init(10, canvasHeight-100, 100, 100); 
	playerLifePanel.setPlayerImage("player-image");	
	playerLifePanel.initLifeImages();
	playerLifePanel.setTitle("Player life");
	
	return playerLifePanel;
}

function createCardsOnHandPanel() {

	var cardsOnHandPanel = Object.create( CardsOnHandPanel );
	cardsOnHandPanel.init();
	cardsOnHandPanel.container.setLocation(230, 500)
		.setSize(500, 80)
		.setAlpha(0.50);
	
	cardsOnHandPanel.container.setId("cards_on_hand_panel");
	cardsOnHandPanel.setTitle("Cards on hand");
	cardsOnHandPanel.initCells();
		
	return cardsOnHandPanel;
}

function createAtkDefPanel() {
	
	var atkDefPanel = Object.create( AtkDefPanel );
	atkDefPanel.initPanel();
	atkDefPanel.initLabels();
	atkDefPanel.setTitle("Atk / Def");
	atkDefPanel.container.setLocation(130, window['director'].canvas.height - 100)
		.setSize(80,80)
		.setAlpha(0.50);		
	
	return atkDefPanel;
}

function createRouletteOptions() {

	var roulette = Object.create( RouletteOptions );
	roulette.initRoulette();
	
	return roulette;
}

/* PRELOAD IMAGES */
function loadImages() {
	
	// Preload images
	new CAAT.ImagePreloader().loadImages(
		[
			{id:'card-water-elements',		url:'img/card-water-elements.png'},
			{id:'card-fire-elements',		url:'img/card-fire-elements.png'},
			{id:'card-land-elements',		url:'img/card-land-elements.png'},				
			{id:'card-air-elements',		url:'img/card-air-elements.png'},
			{id:'card-mascot-elements',		url:'img/card-mascot-elements.png'},
			{id:'button',					url:'img/buttons.png'},
			{id:'stars',					url:'img/stars.png'},
			{id:'player-image',				url:'img/player-image.jpg'},
			{id:'life-panel-bg',			url:'img/lifePanelBg.png'},
			{id:'life',						url:'img/life.png'},
			{id:'slot-bg',					url:'img/slot-bg.jpg'},
			{id:'card1-small',				url:'img/card1-small.jpg'},
			{id:'card2-small',				url:'img/card2-small.jpg'},
			{id:'card1-big',				url:'img/card1.jpg'},
			{id:'card2-big',				url:'img/card2.jpg'},
			{id:'roulette',					url:'img/roulette.png'}												
		],
		function(counter,images) {
			
			if (counter == images.length) {
				window['director'].setImagesCache(images);
					
				// Images were loaded. It's time to init scene/s
				initGame();						
			}
		}
	);	
}

