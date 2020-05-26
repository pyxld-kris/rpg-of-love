import Phaser from "phaser";
import Mixins from "../../.mixins";
import Location from "../Location.js";

export default class MineLocation extends Location {
  constructor(scene) {
    const MIXINS = [Mixins.HasFireParticles];

    super(MIXINS, scene, 0, 0, "mine");
  }

  // Fires after all mixins attached to this entity have been initialized
  onInit() {}

  onRender() {
    this.initFireParticles(100, 30);
  }
}
