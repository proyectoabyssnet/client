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

function Object() {
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

// TESTING EXAMPLES
var box1 = new Box();
box1.position = [30,45];
console.log(box1.name);
box1.name = "NewName";
console.log("Name " + box1.name);
box1.showLifeTime();
