/*** TESTING PURPOSES ***/

var LifeForm = {};
	
Object.defineProperties(LifeForm, {

	health: {
		value: 100,
		writable: true
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
	}
});


var lf1 = Object.create(LifeForm);
var lf2 = Object.create(LifeForm);

//lf1.health = 120;
lf2.health = 180;

console.log( "lf1.health: " + lf1.health  + " , lf2.health: " + lf2.health );

lf2.health = lf2.health - 160;
lf2.attack();
