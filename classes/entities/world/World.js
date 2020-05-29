import Phaser from "phaser";
import Entity from "../Entity.js";
import Mixins from "../.mixins";

import Player from "../../Player/Player";
import Locations from "./locations";
import NPCs from "../npcs";
import PlayScene from "../../../scenes/PlayScene.js";

import Map from "./Map.js";

export default class World extends Entity {
  constructor(scene) {
    const MIXINS = [];
    super([...MIXINS], scene);
  }

  // Fires after all mixins attached to this entity have been initialized
  onInit() {
    this.map = new Map(this.scene);

    this.player = new Player(this.scene);
    this.generateWorld();
    this.player.travelTo(this.getRandomLocationInstance());
  }

  generateWorld() {
    let locationClasses = Object.values(Locations);
    let npcClasses = Object.values(NPCs);

    // Generate 5 random locations with a different NPC in each
    this.locations = [];
    for (let i = 0; i < locationClasses.length; i++) {
      let locationClass = locationClasses[i];
      let thisLocation = new locationClass(this.scene);

      // Initialize new empty location instance
      this.locations.push(thisLocation);

      let numInhabitants = 2 + parseInt(Math.random() * 3);
      for (let j = 0; j < numInhabitants; j++) {
        let npcClass = npcClasses.getRandomEntry();
        let thisNpc = new npcClass(this.scene);
        this.locations[i].addInhabitant(thisNpc);

        npcClasses.splice(npcClasses.indexOf(npcClass), 1);
      }
    }
  }

  getRandomLocationInstance() {
    return this.locations.getRandomEntry();
  }

  beginRandomEncounter() {
    try {
      let locationKeys = Object.keys(Locations);
      this.travelTo(locationKeys.getRandomEntry());

      let npcArray = Object.values(NPCs);
      let randomClass = npcArray.getRandomEntry();
      this.npc = new randomClass(this.scene);
      this.npc.render();
      //this.beginConversationWith(this.npc);
    } catch (e) {
      console.error(e);
    }
  }
}
