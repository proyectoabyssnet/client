/*** TESTING PURPOSES ***/

// INHERITANCE
function Employee(name, department) {
	this.name = name || "";
	this.department = department || "general";
}

function Manager(name, department, reports) {
	this.base = Employee;
	this.base(name, department);
	this.reports = reports || [];
}

Manager.prototype = new Employee; // Inherits from Employee

function WorkerBee(projects) {
	this.projects = projects || [];
}

WorkerBee.prototype = new Employee; // Inherits from Employee

function SalesPerson() {
	this.department = "sales";
	this.quota = 100;
}

SalesPerson.prototype = new WorkerBee; // Inherits from WorkerBee

function Engineer(projects) {
	WorkerBee.call(this, projects);
	this.department = "engineering";
	this.machine = "";
}

Engineer.prototype = new WorkerBee; // Inherits from WorkerBee

function Object(name) {
	this.name = name || "no_name";
	this.position = [];
}

function Box() {
	this.dimensions = [0,0,0];
}

Box.prototype = new Object;
Box.prototype.lifeTime = 5;
Box.prototype.showLifeTime = function() {
	console.log(this.lifeTime);
}


function obj() {

	this.name = "object";
	this.life = 3;
	
	this.m1 = function() {
		console.log(this.name);
	}
	this.m2 = function() {
		console.log(this.life);	
	}
	this.m3 = function() {
		console.log(this.name + "," + this.life);
	}
}

//// TESTING EXAMPLES

var obj1 = new obj();
for(var m in obj1) {
	console.log(m);
}

