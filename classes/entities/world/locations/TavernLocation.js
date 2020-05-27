import Phaser from "phaser";
import Mixins from "../../.mixins";
import Location from "../Location.js";

export default class TavernLocation extends Location {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, 0, 0, "tavern");

    this.setLabel("The Tavern");
  }

  // Fires after all mixins attached to this entity have been initialized
  onInit() {}
}
