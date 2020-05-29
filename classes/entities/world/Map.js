import Phaser from "phaser";
import * as terrain from "fantasy-map-generator";
import Entity from "../Entity.js";
import Mixins from "../.mixins";

export default class Map extends Entity {
  constructor(scene) {
    const MIXINS = [
      Mixins.IsRenderable
      /*
      Mixins.HasInhabitants,
      Mixins.HasLabel,
      Mixins.FillsEntireScreen,
      Mixins.IsInBack,
      ...extraMixins
      */
    ];
    super(MIXINS, scene);

    this.pointContainer = this.scene.add.container();
    this.mapData = this.generate();
  }

  // Fires after all mixins attached to this entity have been initialized
  onInit() {
    this.draw(this.mapData);
  }
  onRender() {
    this.pointContainer.setVisible(true).setActive(true);
  }
  onDerender() {
    this.pointContainer.setVisible(false).setActive(false);
  }

  generate() {
    //var aMap = terrain.generateMap(512, "map!", false);
    var mapData = terrain.generateMap(512, "map!", false);
    console.log(mapData);

    return mapData;
  }

  draw(mapData) {
    // Draw land
    this.drawPointCollections(
      mapData.mesh.vxs,
      0x006600,
      12,
      mapData.points,
      0,
      1
    );

    // Draw ocean
    this.drawPointCollections(
      mapData.mesh.vxs,
      0x3333dd,
      10,
      mapData.points,
      -1,
      0
    );

    // Draw coast
    /*
    for (let coast of mapData.coast) {
      this.drawPointCollections(coast, 0x005500, 10);
    }
    */

    // Draw rivers
    for (let river of mapData.rivers) {
      this.drawPointCollections(river, 0x3333dd, 5);
    }
  }

  drawPointCollections(
    pointCollection,
    color,
    pointSize,
    heightMap,
    minHeight,
    maxHeight
  ) {
    let halfWidth = this.scene.game.config.width / 2;
    let halfHeight = this.scene.game.config.height / 2;
    let centerX = this.scene.game.config.width / 2;
    let centerY = this.scene.game.config.height / 2;

    for (let i = 0; i < pointCollection.length; i++) {
      // If a heightmap was supplied, check it's value here
      if (heightMap) {
        let thisHeight = heightMap[i];
        if (thisHeight < minHeight || thisHeight > maxHeight) continue;
      }

      let pointVec = pointCollection[i];
      let pointX = pointVec[0];
      let pointY = pointVec[1];

      // Convert map coords to game coords
      // Map coords go from -1 to 1 on x and y, floats
      let x = centerX + pointX * halfWidth * 2;
      let y = centerY + pointY * halfHeight * 2;

      this.pointContainer.add(
        this.scene.add.rectangle(x, y, pointSize, pointSize, color)
      );
    }
  }

  destroy() {
    this.pointContainer.destroy();
  }
}
