const TestRunner = require("jest-runner");
const petImport = require('../src/pet');

/* const Pet  = require('../src/pet');
const maxFitness = require('../src/pet'); */

const Pet = petImport.Pet;
const maxFitness = petImport.maxFitness;
const deadMessage = petImport.deadMessage;


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

  it('stays at fitness max on walk if already at max', () => {
    const fitPet = new Pet('fit');
    fitPet.fitness = maxFitness; 
    fitPet.walk();
    expect(fitPet.fitness).toEqual(maxFitness);
  });

  it("doesn't go above fitness of maxFitness", () => {
const fittishPet = new Pet('fittish');
fittishPet.fitness = 9;
fittishPet.walk();
expect(fittishPet.fitness).toBeLessThanOrEqual(maxFitness);
  });

  it("has hunger that decreases after feeding", () => {
    const feedPet = new Pet('feed');
    feedPet.hunger = 5;
    const initialHunger = feedPet.hunger;
    feedPet.feed();
    expect(feedPet.hunger).toBeLessThan(initialHunger);
  });

  it("can't get less hungry than 0", () => {
    const feedPet = new Pet('feed');
    feedPet.hunger = 0;
    feedPet.feed();
    expect(feedPet.hunger).toEqual(0);
  });

  it("says it needs a walk on 3 or less fitness", () => {
    const checkupPet = new Pet('checkup');
    checkupPet.fitness = 1;
    checkupPet.hunger = 3;
    expect(checkupPet.checkup()).toBe("I need a walk")
  });

  it("says it is hungry on 5 hunger or over", () => {
    const checkupPet = new Pet('checkup');
    checkupPet.fitness = 5;
    checkupPet.hunger = 7;
    expect(checkupPet.checkup()).toBe("I am hungry")
  });

  it("says it is hungry and needs a walk if both above conditions met", () => {
    const checkupPet = new Pet('checkup');
    checkupPet.fitness = 1;
    checkupPet.hunger = 7;
    expect(checkupPet.checkup()).toBe("I am hungry AND need a walk")
  });

  it("says it is fine if neither condition is met", () => {
    const checkupPet = new Pet('checkup');
    checkupPet.fitness = 4;
    checkupPet.hunger = 4;
    expect(checkupPet.checkup()).toBe("I feel great!")
  });

  it("throws an error trying to feed dead pet", () => {
    const deadPet = new Pet('corpse');
    deadPet.hunger = 10;

    expect(() => deadPet.feed()).toThrow(deadMessage);
  });

  it("throws an error trying to walk dead pet", () => {
    const deadPet = new Pet('corpse');
    deadPet.fitness = 0;

    expect(() => deadPet.walk()).toThrow(deadMessage);
  });

  it("throws an error trying to age dead pet", () => {
    const deadPet = new Pet('corpse');
    deadPet.age = 30;

    expect(() => deadPet.growUp()).toThrow(deadMessage);
  });

});