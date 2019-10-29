/* let hungerIncreaser = 5;
let fitnessIncreaser = 3;
let walkFitnessIncreaser = 4;
let maxFitness = 10;
let hungerDecreaser = 3;
let deadMessage = "Your pet is no longer alive :(" */
const CONSTANTS = {
  hungerIncreaser: 5,
  fitnessIncreaser: 3,
  walkFitnessIncreaser: 4,
  maxFitness: 10,
  maxHunger: 10,
  hungerDecreaser: 3,
  maxAge: 30,
  deadMessage: "Your pet is no longer alive :("
};

const {
  hungerIncreaser,
  fitnessIncreaser,
  walkFitnessIncreaser,
  maxFitness,
  maxAge,
  hungerDecreaser,
  deadMessage,
  maxHunger
} = CONSTANTS;

function Pet(name){
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = maxFitness;
  this.children = [];
}

Pet.prototype = {
  growUp: function(increase = 1) {
    if (!this.isAlive) {
      throw deadMessage;
    }
    this.age += increase;
    this.hunger += increase * hungerIncreaser;
    if (this.hunger > maxHunger) {this.hunger = maxHunger;}
    this.fitness -= increase * fitnessIncreaser;
    if (this.fitness < 0){this.fitness = 0;}
  },
  get isAlive() {
    return this.age < maxAge && this.hunger < maxHunger && this.fitness > 0;
  },
  
  walk: function(session = 1) {
    if (!this.isAlive) {
      throw deadMessage;
    }
    this.fitness += session * walkFitnessIncreaser;
    if (this.fitness > maxFitness) {
      this.fitness = maxFitness;
    }
  },
  feed: function(decrease = 1) {
    if (!this.isAlive) {
      throw deadMessage;
    }
    this.hunger -= decrease * hungerDecreaser;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  },
  haveBaby: function(babyName) {
    const babyPet = new Pet(babyName);
    babyPet.parent = this;
    this.children.push(babyPet);
    return babyPet;
  },
  checkup: function() {
    switch (true) {
      case !this.isAlive:
        return deadMessage;
      case this.fitness <= 3 && this.hunger < 5:
        return "I need a walk";
        break;
      case this.fitness > 3 && this.hunger >= 5:
        return "I am hungry";
        break;
      case this.fitness <= 3 && this.hunger >= 5:
        return "I am hungry AND need a walk";
        break;
      default:
        return "I feel great!";
    }
  }
}



const bobby = new Pet("Bobby");
const dobby = new Pet("Dobby");
const dobbito = dobby.haveBaby("Dobbito");
const bobbito = bobby.haveBaby("Bobbito");
console.log(bobby);
bobby.growUp();
console.log(bobby);
console.log(dobby);
console.log(dobbito);

module.exports = { Pet, CONSTANTS };
