// Common
import IsRenderable from "./common/IsRenderable";
import IsPhysical from "./common/IsPhysical";
import HasLabel from "./common/HasLabel";

// UI
import HasDialogBackground from "./ui/HasDialogBackground";
import HasDialogText from "./ui/HasDialogText";
import HasNametag from "./ui/HasNametag";
import IsAttachedToCamera from "./ui/IsAttachedToCamera";
import IsInFront from "./ui/IsInFront";

// Locations
import FillsEntireScreen from "./locations/FillsEntireScreen";
import HasFireParticles from "./locations/HasFireParticles";
import HasInhabitants from "./locations/HasInhabitants";
import IsInBack from "./locations/IsInBack";

// NPCs
import HasAge from "./npcs/HasAge";
import HasSkills from "./npcs/HasSkills";
import HasRole from "./npcs/HasRole";
import HasGender from "./npcs/HasGender";
import HasCharacterName from "./npcs/HasCharacterName";
import CanSpeak from "./npcs/CanSpeak";
import HasWobbleEffect from "./npcs/HasWobbleEffect";

export default {
  // Common
  IsRenderable,
  IsPhysical,
  HasLabel,

  // UI
  HasDialogBackground,
  HasDialogText,
  HasNametag,
  IsAttachedToCamera,
  IsInFront,

  // Locations
  FillsEntireScreen,
  HasFireParticles,
  HasInhabitants,
  IsInBack,

  // NPCs
  HasAge,
  HasSkills,
  HasRole,
  HasGender,
  HasCharacterName,
  CanSpeak,
  HasWobbleEffect
};
