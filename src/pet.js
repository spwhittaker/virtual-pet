

function Pet(name) {

  return  { name: name,
            age: 0,
            hunger: 0,
            fitness: 10,
            growUp: function(increase = 1) {
            this.age += increase;
            this.hunger += increase * 5;
            this.fitness -= increase * 3;
            return;
            }};
};

const bobby = new Pet('Bobby');
const dobby = new Pet('Dobby');
console.log(bobby);
bobby.growUp();
console.log(bobby);
console.log(dobby);

module.exports = Pet;