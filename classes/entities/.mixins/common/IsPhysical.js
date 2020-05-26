// IsPhysical:

import Phaser from "phaser";

class IsPhysical {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

IsPhysical.methods = {
  // Called when an entity with this mixin is spawned into a visible scene
  _onInit() {
    // Add to physics engine
    this.scene.physics.add.existing(this);
  }
};

export default IsPhysical;
