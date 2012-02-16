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
	this.name = "object";
}

function Box() {
	this.dimensions = [0,0,0];
}

Box.prototype = new Object;

// TESTING EXAMPLES
var box1 = new Box();
console.log(box1.name);

