/*** TESTING PURPOSES ***/

var LifeForm = {};
	
Object.defineProperties(LifeForm, {

	id: 		{ value: "", writable: true },
	mainWeapon: { value: "", writable: true },
	weapons: 	{ value: ["pistol"], writable: true },
	lifes:		{ value: 5, writable: true },
	defense: 	{ value: 0, writable: true },
	health: {
		value: 100,
		writable: true
	},

	init: {
	
		value: function() {
			
			this.weapons = ["pistol"];
		
		}, enumerable: true
	},
	
	attack: {
	
		value: function() {
			
			var health = this.health;
			
			if (health >= 60) {
			
				console.log("attacking!!!");
				
			} else {
				console.log("You are too weak now. Take some rest");
			}
		
		}, enumerable: false
	},
	
	setDefense: {
		
		value: function(value) {
			
			this.defense += value;
		}
	}
});


var lifeForms = [];
var lfObject = null;
var randomDefense = 0;

for(var i=0; i < 10; i++) {

	lfObject = Object.create(LifeForm);
	lfObject.init();
	lfObject.id = "lifeform_" + i;
	lfObject.lifes += i;
	
	// Some of them will take an aditional weapon
	if (i % 2 == 0) {
	
		lfObject.weapons.push("Machine gun");
	}
	
	console.log(lfObject.weapons);
	// Random defense between 1 and 100 units
	randomDefense = Math.round( 1 + (Math.random() * (100 - 1)) );	
	lfObject.setDefense(randomDefense);
	lifeForms.push( lfObject );
}

for(var i=0; i < 10; i++) {
	
	console.log(lifeForms[i].id + ", lifes: " + 
		lifeForms[i].lifes + " has a defense of " +
		lifeForms[i].defense + " units");
		
	console.log("Weapons: " + lifeForms[i].weapons.length);
}
