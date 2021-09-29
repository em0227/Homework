
function titleize(callback, ...names) {
    
    return names.map(callback)
}

function printCallback(name) {
    return 'Mr. ' + name + '  Jingleheimer Schmidt'
}

// console.log(titleize(printCallback, "Mary", "Brian", "Leo"));



function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;

    this.trumpet = function () {
        console.log(this.name + " the elephant goes 'phrRRRRRRRRRRR!!!!!!!'" )
    }
}

Elephant.prototype.grow = function () {
    return this.height + 12
}

Elephant.prototype.addTricks = function (trick) {
    return this.tricks.push(trick)
}

Elephant.prototype.play = function (params) {
    const length = this.tricks.length
    const tricks = this.tricks
    const trick = tricks[Math.floor(Math.random()*length)]
    console.log(`${this.name} is ${trick}!`)
}

// const e = new Elephant('emily', 6.1, ['studying', 'reading']);

// e.trumpet()
// console.log(e.grow())
// e.play()

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.prototype.paradeHelper = function () {
    console.log(`${this.name} is trotting by!`)
}

console.log(herd.forEach(el => el.paradeHelper()))

function dinerBreakfast() {
    const food = ""
    function order(newFood)) {
        
    }
}