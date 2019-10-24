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
    expect(myPet.name).toEqual('fido')})

});