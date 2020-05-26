import Phaser from "phaser";

class HasSkills {
  constructor() {
    var attributes = {
      skills: [],
      skillDisplay: null
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

HasSkills.methods = {
  // Called when an entity with this mixin is spawned into a visible scene
  _onRender() {
    /*
    this.skillDisplay = this.scene.add
    .bitmapText(
      x - width / 2,
      y,
      "teeny-tiny-pixls",
      "",
      5,
      Phaser.GameObjects.BitmapText.ALIGN_LEFT // 1=middle algned text
    )
    .setOrigin(0, 0)
    .setMaxWidth(width);
    */
  },

  // <Getters>
  getSkills() {
    return this.skills;
  },

  getSkillString() {
    let returnString = "\n" + this.age + "\n\n";
    this.skills.forEach((skill, index) => {
      returnString += skill.type + ": " + skill.level;
      returnString += "\n";
    });

    return returnString;
  },
  // </Getters>

  // <Setters>
  setSkills(skills) {
    this.skills = skills;
  },
  // </Setters>

  getSkillIndex(skillType) {
    for (let i = 0; i < this.skills.length; i++) {
      const skill = this.skills[i];
      if (skill.type === skillType) {
        return i;
      }
    }
    return -1;
  },

  addSkill(skillType) {
    let skillIndex = this.getSkillIndex(skillType);
    if (skillIndex !== -1) {
      // Insert a new skill entry for this Actor
      this.skills[skillIndex].level++;
    } else {
      // Insert a new skill entry for this Actor
      this.skills.push({ type: skillType, level: 1 });
    }
  },

  // TODO: "why not add in multipliers for different races so you could have less skills as older things"
  populateSkills() {
    for (let i = 0; i < this.getAge(); i++) {
      // Every year of this actor's life:
      //  80% chance of becoming more proficient in an existing skill they have
      //  20% chance of acquiring a random new skill

      if (Math.random() < 0.8 && this.skills.length > 0) {
        // Existing skill
        let existingSkill = this.skills[
          parseInt(Math.random() * this.skills.length)
        ];
        let existingSkillType = existingSkill.type;

        this.addSkill(existingSkillType);
      } else {
        // New skill
        let newSkill = skillTypes[parseInt(Math.random() * skillTypes.length)];
        let newSkillType = newSkill.skillType;

        this.addSkill(newSkillType);
      }
    }
  }
};

export default HasSkills;

/*
 *Holds a dictionary of all of our possible skills
 */

const skillTypes = [
  {
    skillType: "*",
    difficulty: 1
  },
  {
    skillType: "Alchemy",
    difficulty: 1
  },
  {
    skillType: "Animals",
    difficulty: 1
  },
  {
    skillType: "Artistry",
    difficulty: 1
  },
  {
    skillType: "Blacksmithing",
    difficulty: 1
  },
  {
    skillType: "Combat",
    difficulty: 1
  },
  {
    skillType: "Cooking",
    difficulty: 1
  },
  {
    skillType: "Dancing",
    difficulty: 1
  },
  {
    skillType: "Deceit",
    difficulty: 1
  },
  {
    skillType: "Farming",
    difficulty: 1
  },
  {
    skillType: "Fishing",
    difficulty: 1
  },
  {
    skillType: "Fortune Telling",
    difficulty: 1
  },
  {
    skillType: "Intelligence",
    difficulty: 1
  },
  {
    skillType: "Intimidation",
    difficulty: 1
  },
  {
    skillType: "Magic",
    difficulty: 1
  },
  {
    skillType: "Mercantilism",
    difficulty: 1
  },
  {
    skillType: "Performance",
    difficulty: 1
  },
  {
    skillType: "Thievery",
    difficulty: 1
  },
  {
    skillType: "Seamanship",
    difficulty: 1
  },
  {
    skillType: "Seduction",
    difficulty: 1
  },
  {
    skillType: "Street Savviness",
    difficulty: 1
  },
  {
    skillType: "Storytelling",
    difficulty: 1
  },
  {
    skillType: "Woodsmanship",
    difficulty: 1
  },
  {
    skillType: "Arrogance",
    difficulty: 1
  },
  {
    skillType: "Fashion",
    difficulty: 1
  }
];
