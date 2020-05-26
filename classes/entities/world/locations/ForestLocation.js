import Phaser from "phaser";
import Mixins from "../../.mixins";
import Location from "../Location.js";

export default class ForestLocation extends Location {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, 0, 0, "forest");
  }

  // Fires after all mixins attached to this entity have been initialized
  onInit() {}
}
