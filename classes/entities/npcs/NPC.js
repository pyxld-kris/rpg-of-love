import Phaser from "phaser";
import Entity from "../Entity.js";
import Mixins from "../.mixins";

export default class NPC extends Entity {
  constructor(extraMixins, scene, imageKey) {
    const MIXINS = [
      Mixins.IsRenderable,

      Mixins.HasAge,
      Mixins.HasSkills,
      Mixins.HasRole,
      Mixins.HasGender,
      Mixins.HasCharacterName,
      Mixins.CanSpeak,
      Mixins.HasWobbleEffect
    ];

    super([...MIXINS, ...extraMixins], scene, 130, 45, imageKey);

    this.setDepth(1);
    this.setScale(0);

    this.setPipeline("dropshadow");

    // Configure CanSpeak mixin
    this.setDialogOptions = [
      "Welcome, I love you",
      "It's so wonderful to meet you!",
      "You are my sunshine",
      "I'm going to tell you a story. It begins like all stories, in the beginning. As the story progresses, it then has some other parts like a middle and an end."
    ];

    // Mixin data population stuff (moved from init)
    this.populateAge();
    console.log(this.getAge());
    this.populateSkills();
    console.log(this.getSkillString());

    this.assignRandomName();
  }

  // Fires after all mixins attached to this entity have been fully initialized
  onInit() {}

  // Fires when this entity is first rendered (after all attached mixins have fired _onRender)
  onRender() {
    this.normalView();
    this.setScale(0);
    this.doAppearEffect();
    this.beginConversation();

    this.animInterval = setInterval(() => {
      let randNum = Math.random();
      if (randNum < 0.65) this.normalView();
      else if (randNum < 0.75) this.farView();
      else this.zoomView();
    }, 2500);
  }
  // Fires when this entity is derendered (after all attached mixins have fired _onDerender)
  onDerender() {
    clearInterval(this.animInterval);
  }

  doAppearEffect(onComplete) {
    this.appearanceTween = this.scene.tweens.add({
      targets: [this],
      scaleX: 2,
      scaleY: 2,
      ease: "Bounce",
      duration: 500,
      //loop: -1,
      //loopDelay: 1500,
      yoyo: false,
      onComplete: onComplete
    });
  }

  farView() {
    this.setPosition(130, 31);
    this.setScale(1);
  }

  normalView() {
    this.setPosition(130, 45);
    this.setScale(2);
  }

  zoomView() {
    this.setPosition(120, 65);
    this.setScale(4);
  }

  speak() {
    let message = this.dialogOptions.getRandomEntry();
  }

  destroy() {
    this.onDerender();
    super.destroy();
  }
}
