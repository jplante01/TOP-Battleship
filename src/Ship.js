// attributes
// length
// hits (number of times hit)
//
// methods
// isSunk() calculates boolean based on length and number of hits
const shipPrototype = {
  hit() {
    this.shipLength -= 1;
  },
  isSunk() {
    if (this.hits >= this.shipLength) {
      return true;
    }
    return false;
  },
};

function Ship(shipLength) {
  if (shipLength <= 0) throw new Error('Length input must be >= 0');

  return Object.assign(Object.create(shipPrototype), { });
};

export default Ship;
// module.exports = Ship;