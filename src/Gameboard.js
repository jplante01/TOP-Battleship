function Gameboard() {
  function createBoard() {
    const newBoard = [];
    const row = [null, null, null, null, null, null, null, null, null, null];
    for (let i = 0; i < 10; i++) { newBoard.push([...row]); }
    return newBoard;
  }

  const board = createBoard();

  function placeShip(ship, coordinates, direction) {
    let desiredArea = [coordinates];
    let dir = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1],
    }

    if (!Object.keys(dir).includes(direction)) {
      throw new Error('Invalid direction provided to placeShip');
    }

    for (i = 0; i < ship.shipLength; i++) {
      const lastIndex = desiredArea.length - 1;
      const transform = dir[direction];
      const nextCoordinate = [
        desiredArea[lastIndex][0] + transform[0],
        desiredArea[lastIndex][1] + transform[1],
      ];
      desiredArea.push(nextCoordinate)
    }

    desiredArea.forEach((coordinate) => {
      if (coordinate[0] < 0 || coordinate[0] > 10 || coordinate[1] < 0 || coordinate[1] > 10) {
        throw new Error('Placement overflows board');
      } if (board[coordinate[0]][coordinate[1]] !== null) {
        throw new Error('Cannot place over another ship');
      }
    });

    desiredArea.forEach((coordinate) => {
      board[coordinate[0]][coordinate[1]] = ship;
    });
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