import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class MaskedStranger extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "maskedStranger");
  }

  // Fires after all mixins attached to this entity have been initialized
  init() {
    this.setRole("Masked Stranger");
    this.assignRandomGender(["male", "female"]);
    this.populateAge(20, 45);

    setTimeout(() => {
      this.scene.sound.play("maskedStranger", { volume: 0.25 });
    }, 500);

    super.init();
  }
}
