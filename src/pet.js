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
  hungerDecreaser: 3,
  deadMessage: "Your pet is no longer alive :("
};

const {
  hungerIncreaser,
  fitnessIncreaser,
  walkFitnessIncreaser,
  maxFitness,
  hungerDecreaser,
  deadMessage
} = CONSTANTS;

function Pet(name) {
  return {
    name: name,
    age: 0,
    hunger: 0,
    fitness: 10,
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    },
    growUp: function(increase = 1) {
      if (!this.isAlive) {
        throw deadMessage;
      }
      this.age += increase;
      this.hunger += increase * hungerIncreaser;
      this.fitness -= increase * fitnessIncreaser;
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
    },
    children: [],
    haveBaby: function(babyName) {
      const babyPet = Pet(babyName);
      babyPet.parent = this.name;
      this.children.push({ name: babyName });
      return babyPet;
    }
  };
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
