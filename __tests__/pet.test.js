const TestRunner = require("jest-runner");


const Pet  = require('../src/pet');
const maxFitness = require('../src/pet');

/* describe("check that the variable pet has an assignment"){
    expect(pet).toBe(true);
}
 */

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });

  it('gives an object including the name passed in', () =>
  { const myPet = new Pet('fido');
    expect(myPet.name).toEqual('fido')});

  it('starts age at 0', () =>
  {
    const testPet = new Pet('testBoi');
  expect(testPet.age).toEqual(0);

  });

  it('increases its age to 1 after growUp', () =>
  {
    const youngPet = new Pet('oldBoi');
    youngPet.growUp();
    expect(youngPet.age).toEqual(1);
  }) ;

  it('increases hunger when growUp is called and fitness to decrease', () =>
  {
    const hungryPet = new Pet('hungry');
    hungryPet.growUp();
    expect(hungryPet.hunger).toEqual(5);
    expect(hungryPet.fitness).toEqual(7);
    
    
    const pet2 = new Pet('hungry');
    pet2.growUp(2);
    expect(pet2.hunger).toEqual(10);
    expect(pet2.fitness).toEqual(4);
  });

  it('gains fitness when calling walk if fitness is less than 10', () =>{
    const unfitPet = new Pet('unfit');
    unfitPet.fitness = 1;
    unfitPet.walk();
    expect(unfitPet.fitness).toBeGreaterThan(1);
  });

  it('stays at fitness 10 on walk if already at max', () => {
    const fitPet = new Pet('fit');
    fitPet.fitness = 10; 
    fitPet.walk();
    expect(fitPet.fitness).toEqual(10);
  });

  it("doesn't go above fitness of 10", () => {
const fittishPet = new Pet('fittish');
fittishPet.fitness = 9;
fittishPet.walk();
expect(fittishPet.fitness).toBeLessThanOrEqual(10);
  });

});