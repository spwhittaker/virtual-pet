let hungerIncreaser = 5;
let fitnessIncreaser = 3;
let walkFitnessIncreaser = 4;
let maxFitness = 10;
let hungerDecreaser = 3;

function Pet(name) {
    return {name: name,
            age: 0,
            hunger: 0,
            fitness: 10,
            growUp: function(increase = 1) {
            this.age += increase;
            this.hunger += increase * hungerIncreaser;
            this.fitness -= increase * fitnessIncreaser;},
            walk: function(session = 1){
            this.fitness += session * walkFitnessIncreaser;
            if (this.fitness > maxFitness){this.fitness = maxFitness;
            }},
            feed: function(decrease = 1) {
              this.hunger -= decrease * hungerDecreaser;
              if (this.hunger < 0) {this.hunger = 0;}
            }
          }

            };


const bobby = new Pet('Bobby');
const dobby = new Pet('Dobby');
console.log(bobby);
bobby.growUp();
console.log(bobby);
console.log(dobby);

module.exports = {Pet, maxFitness};
