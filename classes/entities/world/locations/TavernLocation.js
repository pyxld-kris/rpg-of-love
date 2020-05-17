import Phaser from "phaser";
import VisibleEntity from "../../VisibleEntity.js";

import Mixins from "../../.mixins";

export default class TavernLocation extends VisibleEntity {
  constructor(scene) {
    const MIXINS = [Mixins.FillsEntireScreen, Mixins.IsInBack];

    super(MIXINS, scene, 0, 0, "tavern");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {}
}
