// IsRenderable:

import Phaser from "phaser";

class IsRenderable {
  constructor() {
    var attributes = {
      hasBeenRendered: false
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

IsRenderable.methods = {
  render() {
    try {
      if (!this.hasBeenRendered) {
        // Add to Phaser's rendering engine
        this.scene.add.existing(this);
        this.hasBeenRendered = true;
      } else {
        this.setActive(true).setVisible(true);
      }

      // Call _onRender event of each mixin attached to this entity (if it exists)
      this.fireMixinEvents("_onRender");

      if (this.onRender) this.onRender();
    } catch (e) {
      console.error(e);
    }
  },

  derender() {
    this.setActive(false).setVisible(false);
    this.fireMixinEvents("_onDerender");
  },

  _onDestroy() {}
};

export default IsRenderable;
