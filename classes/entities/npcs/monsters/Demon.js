import Phaser from "phaser";
import NPC from "../NPC.js";
import Mixins from "../../.mixins";

export default class Demon extends NPC {
  constructor(scene) {
    const MIXINS = [];

    super(MIXINS, scene, "demon");
  }

  // Fires after all mixins attached to this entity have been initialized
  onInit() {
    this.setRole("Demon");
    this.assignRandomGender(["male"]);

    setTimeout(() => {
      this.scene.sound.play("demon", { volume: 0.25 });
    }, 500);

    super.onInit();
  }
}
