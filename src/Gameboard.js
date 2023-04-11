function Gameboard() {
  function createBoard() {
    const newBoard = [];
    const row = [null, null, null, null, null, null, null, null, null, null];
    for (let i = 0; i < 10; i++) { newBoard.push([...row]); }
    return newBoard;
  }


  const board = createBoard();

  function placeShip(ship, coordinates, direction) {
  }

  return { placeShip, board };
}

module.exports = Gameboard;

// placeShip(ship, coordinates, direction)

// receiveAttack(coordinates)
// determines if attack hit ship
// calls hit() on correct ship
// records missed shots

// allShipsSunk() returns boolean