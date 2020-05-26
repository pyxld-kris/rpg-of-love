import Phaser from "phaser";

class HasRole {
  constructor() {
    var attributes = {
      role: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasRole.methods = {
  // Called when an entity with this mixin is spawned into a visible scene
  _onRender() {},

  // <Getters>
  getRole() {
    return this.role;
  },
  // </Getters>

  // <Setters>
  setRole(role) {
    this.role = role;
  }
  // </Setters>
};

export default HasRole;
