import Phaser from "phaser";

class HasAge {
  constructor() {
    var attributes = {
      age: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasAge.methods = {
  // Called when an entity with this mixin is spawned into a visible scene
  _onRender() {},

  // <Getters>
  getAge() {
    return this.age;
  },
  // </Getters>

  // <Setters>
  setAge(age) {
    this.age = age;
  },
  // </Setters>

  populateAge(min = 5, max = 50) {
    this.setAge(min + parseInt(Math.random() * (max - min)));
  }
};

export default HasAge;
