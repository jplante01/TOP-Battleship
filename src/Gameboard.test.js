Ship = require('./Ship.js');
Gameboard = require('./Gameboard.js')

let testBoard;
beforeEach(() => {
  testBoard = Gameboard();
  testBoard.boardCompare = function (boardCompared) {
    for (i = 0; i < this.length; i++) {
      for (j = 0; j < this[0].length; j++) {
        if (this[i][j] !== boardCompared[i][j]) {
          return false; 
        }
      }
    }
    return true;
  }
});

it('Exists', () => {
  Gameboard();
});

it('Creates a correctly formatted 2d array', () => {
  expect(testBoard.board).toHaveLength(10);
  expect(testBoard.board.flat().every((el) => el === null)).toBe(true);
});

it('Has a placeShip() function', () => {
  testBoard.placeShip(Ship(4), [0,0], 'down');
});

it('Correctly places a ship on the board', () => {

  const testShip = Ship(4);
  testBoard.placeShip(testShip, [0,0], 'right');
  expect(
    testBoard.boardCompare([
      [testShip, testShip, testShip, testShip, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]))
  .toBe(true);
});