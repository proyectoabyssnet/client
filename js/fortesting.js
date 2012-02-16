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

// TESTING EXAMPLES

var eng1 = new Engineer(["p1","p3"]);
console.log(eng1.department);
console.log(eng1.projects);
