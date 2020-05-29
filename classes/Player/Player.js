// Player represents the viewer of the game world, the entity the camera is attached to

import Phaser from "phaser";

import Locations from "../entities/world/locations";
import NPCs from "../entities/npcs";
import Conversation from "../entities/conversations/Conversation";
import DialogBox from "../entities/conversations/DialogBox";

class Player {
  constructor(scene) {
    this.scene = scene;
    this.currentLocation = null;
    this.currentConversation = null;

    const worldWidth = scene.physics.world.bounds.width;
    const worldHeight = scene.physics.world.bounds.height;
    const halfWorldWidth = worldWidth / 2;
    const halfWorldHeight = worldHeight / 2;

    //this.beginRandomEncounter();
  }
  travelTo(destination) {
    try {
      if (this.currentLocation) this.currentLocation.derender();
      if (this.currentConversation) this.currentConversation.derender();
      if (this.npc) this.npc.derender();

      this.beginJourney(destination);
    } catch (e) {
      console.error(e);
    }
  }

  beginJourney(destination) {
    let camera = this.scene.cameras.main;
    //camera.fadeOut(1000, 0, 0, 0, () => {
    this.scene.input.off("pointerdown");

    /*
    this.travelingBackground = this.scene.add
      .rectangle(
        0,
        0,
        this.scene.game.config.width,
        this.scene.game.config.height,
        0x000000
      )
      .setOrigin(0, 0);
*/
    this.scene.world.map.render();

    this.travelingDialogBox = new DialogBox(
      this.scene,
      null,
      "You make your way to " + destination.getLabel()
    );
    this.travelingDialogBox.render();

    //camera.fadeIn();

    this.scene.input.on("pointerdown", () => {
      //this.travelingBackground.destroy();
      this.travelingDialogBox.destroy();
      this.arriveAt(destination);
    });
    //});
  }

  arriveAt(destination) {
    try {
      this.scene.input.off("pointerdown");
      this.scene.world.map.derender();

      let camera = this.scene.cameras.main;

      this.currentLocation = destination;
      this.currentLocation.render();

      this.npc = destination.getInhabitants().getRandomEntry();
      this.npc.render();

      //camera.fadeIn();

      this.scene.input.on("pointerdown", () => {
        this.travelTo(this.scene.world.getRandomLocationInstance());
      });
    } catch (e) {
      console.error(e);
    }
  }

  destroy() {
    this.currentLocation.destroy();
  }
}

export default Player;
