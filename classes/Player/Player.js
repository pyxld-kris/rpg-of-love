// Player represents the viewer of the game world, the entity the camera is attached to

import Phaser from "phaser";

import Locations from "../entities/world/locations";
import NPCs from "../entities/npcs";
import Conversation from "../entities/conversations/Conversation";

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
  travelTo(locationInstance) {
    try {
      if (this.currentLocation) this.currentLocation.derender();
      if (this.currentConversation) this.currentConversation.derender();
      if (this.npc) this.npc.derender();

      let camera = this.scene.cameras.main;
      camera.fadeOut(1000, 0, 0, 0, () => {
        this.currentLocation = locationInstance.location;
        this.currentLocation.render();

        this.npc = locationInstance.inhabitants.getRandomEntry();
        this.npc.render();

        camera.fadeIn();
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
