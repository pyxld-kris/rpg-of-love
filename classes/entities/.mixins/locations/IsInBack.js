import Phaser from "phaser";

class IsInBack {
  constructor() {
    var attributes = {};

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

IsInBack.methods = {
  // Called when an entity with this mixin is spawned into a visible scene
  _onRender() {
    this.setDepth(-2);
    this.forEachMember(member => {
      member.setDepth(-2);
    });
  }
};

export default IsInBack;
