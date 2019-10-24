const TestRunner = require("jest-runner");


const Pet = require('../src/pet');
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

  it('increases hunger by 5 when growUp is called and fitness to decrease by 3', () =>
  {
    const hungryPet = new Pet('hungry');
    hungryPet.growUp();
    expect(hungryPet.hunger).toEqual(5);
    expect(hungryPet.fitness).toEqual(7);
  });

  
    const pet2 = new Pet('hungry');
    pet2.growUp(2);
    expect(pet2.hunger).toEqual(10);
    expect(pet2.fitness).toEqual(4);
  

});