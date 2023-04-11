Ship = require('./Ship.js');
Gameboard = require('./Gameboard.js')

let testBoard;
beforeEach(() => {
  testBoard = Gameboard();
});

it('Exists', () => {
  Gameboard();
});

it('Creates a correctly formatted 2d array', () => {
  expect(testBoard.board).toHaveLength(10);
  expect(testBoard.board.flat().every((el) => el === null)).toBe(true);
});

it('Has a placeShip() function', () => {
  testBoard.placeShip();
});

it('Correctly places a ship on the board', () => {
});