// HasInhabitants:

import Phaser from "phaser";

class HasInhabitants {
  constructor() {
    var attributes = {
      inhabitants: []
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasInhabitants.methods = {
  getInhabitants() {
    return this.inhabitants;
  },

  setInhabitants(inhabitants) {
    this.inhabitants = inhabitants;
  },

  addInhabitant(inhabitant) {
    this.inhabitants.push(inhabitant);
  },

  removeInhabitant(inhabitant) {
    let index = this.inhabitants.indexOf(inhabitant);
    this.inhabitants.splice(index, 1);
  }
};

export default HasInhabitants;
