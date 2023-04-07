Ship = require('./Ship.js');

it('Exists', () => {
  Ship(1);
});

it('Throws error if length parameter is <= 0', () => {
  expect(() => {
    Ship(0);
  }).toThrow(Error);
  expect(() => {
    Ship(-10);
  }).toThrow(Error);
});

it('isSunk() method responds with correct boolean value after hits', () => {
  const testShip = Ship(4);
  expect(testShip.isSunk()).toBe(true);

  for (i = 0; i < 4; i++) {
    testShip.hit();
  }
  
  expect(testShip.isSunk).toBe(true);
})