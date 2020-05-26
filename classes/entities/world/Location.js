import Phaser from "phaser";
import Entity from "../Entity.js";
import Mixins from "../.mixins";

export default class Location extends Entity {
  constructor(extraMixins, scene, x, y, imageKey) {
    const MIXINS = [
      Mixins.IsRenderable,
      Mixins.FillsEntireScreen,
      Mixins.IsInBack,
      ...extraMixins
    ];

    super(MIXINS, scene, 0, 0, imageKey);
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {}
}
