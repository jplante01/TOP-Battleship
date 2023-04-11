function Ship(shipLength) {
  if (shipLength < 1) throw new Error('Length parameter must be >= 1')
  let hits = 0;

  function hit() {
    hits += 1;
  }

  function isSunk() {
    return hits >= shipLength;
  }

  return { hit, isSunk };
}

module.exports = Ship;