

function Pet(name) {

  return  { name: name,
            age: 0,
            growUp: function() {
            return this.age ++;
            }};
};

const bobby = new Pet('Bobby');
const dobby = new Pet('Dobby');
console.log(bobby);
bobby.growUp();
console.log(bobby);
console.log(dobby);

module.exports = Pet;