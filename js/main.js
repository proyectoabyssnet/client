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
	
	/*
	window['Tag'] = createTag();
	scene_1.addChild(window['Tag'].container);
	*/
	window['equiped_cards_panel'] = createEquipedCardsPanel();
	scene_1.addChild(window['equiped_cards_panel'].container);

	var playerLifePanel = createPlayerLifePanel();
	scene_1.addChild(playerLifePanel.container);
	
	window['cards_on_hand_panel'] = createCardsOnHandPanel();
	scene_1.addChild(window['cards_on_hand_panel'].container);
	
	var atkDefPanel = createAtkDefPanel();
	scene_1.addChild(atkDefPanel.container);
			
	var rouletteOptions = createRouletteOptions();
	scene_1.addChild(rouletteOptions.container);
		

	/*
	* INIT GAME PROCEDURES (giveAwayCards, initPlayers,....)
	*/
	// Create cards
	scene_1.enableInputList(5);	// panel and numberOfCards
		
	var card = null;
	var cardIndex = 0;
	var cardsOnHandCount = 5;
	
	
	for(; cardIndex < cardsOnHandCount; cardIndex++) {
	
		card = Object.create( Card );	
		card.init("card_on_hand_" + cardIndex);
		card['name'] = "card_" + cardIndex;
		var cardType = randomCardType();
		console.log("# Created " + cardType + " card type");	
		card.setElementType(cardType);
		card.setImage("card1-small");

		//window['equiped_cards_panel'].equipCard( card );
		window['cards_on_hand_panel'] .addCard( card );
		
		scene_1.addActorToInputList(card.container, cardIndex);			
	}
	
	scene_1.addActorToInputList(window['cards_on_hand_panel'].container, cardsOnHandCount);
	//scene_1.addActorToInputList(window['equiped_cards_panel'].container, cardsOnHandCount + 1);
		
	//scene_1.setZOrder(window['Tag'].container, Number.MAX_VALUE);
	
	CAAT.loop(60);
}

/* END INIT GAME */

function randomCardType() {

	// Generate random card type (air, land,...)
	var minValue = 1;
	var maxValue = 5;
	var randomCardType = Math.round(minValue + (Math.random() * (maxValue - minValue)) );
	var cardType = "";
	
		
	switch(randomCardType) {
	
		case 1:
			cardType = "land";
		break;
		
		case 2:
			cardType = "water";
		break;
		
		case 3:
			cardType = "fire";
		break;
		
		case 4:
			cardType = "mascot";
		break;
		
		case 5:
			cardType = "air";
		break;
	}
	
	return cardType;
}

function createTag() {

	var tag = Object.create(Tag);
	tag.init("Tag", "Object ID", "Game object description");
	
	return tag;
}

function createEquipedCardsPanel() {
	
	var equipedCardsPanel = Object.create( EquipedCardsPanel );
	equipedCardsPanel.initPanel();
	equipedCardsPanel.setTitle("Equiped cards");	
	equipedCardsPanel.container.setLocation(10,10)
		.setSize(160,430)
		.setAlpha(0.0)
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
			{id:'roulette',					url:'img/roulette.png'},
			{id:'cell-cover',				url:'img/cell-cover.jpg'},
			{id:'cell-cover-sprite',		url:'img/cell-cover.png'},	
			{id:'card-displayer-button',	url:'img/right_arrow.png'},	
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

