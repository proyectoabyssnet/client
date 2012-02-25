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



//// TESTING EXAMPLES
var car1 = new Car();


