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
  }) 

});