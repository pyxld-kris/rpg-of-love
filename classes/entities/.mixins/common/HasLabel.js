// HasLabel:

import Phaser from "phaser";

class HasLabel {
  constructor() {
    var attributes = {
      label: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasLabel.methods = {
  setLabel(label) {
    this.label = label;
  },

  getLabel() {
    return this.label;
  }
};

export default HasLabel;
