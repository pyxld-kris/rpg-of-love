// Allows an Entity to begin or participate in conversations

import Phaser from "phaser";
import Conversation from "../../conversations/Conversation";

class CanSpeak {
  constructor() {
    var attributes = {
      currentConversation: null,
      possibleConversations: []
    };

    Object.assign(this, attributes);
    Object.assign(this, this.constructor.methods);
  }
}

CanSpeak.methods = {
  // Called when an entity with this mixin is spawned into a visible scene
  _onRender() {},

  setPossibleConversations(possibleConversations) {
    this.possibleConversations = possibleConversations;
  },

  beginConversation() {
    /*
    this.currentConversation = new Conversation(
      this.scene,
      [this],
      this.possibleConversations
    );
    */
    this.currentConversation = new Conversation(
      this.scene,
      [this],
      this.getPossibleDialog()
    );
  },

  getPossibleDialog() {
    // Get dialog based on this character's interests
    let myInterest = this.getSkills()[0].type;
    let myDialogOptions = null;
    for (let i = 0; i < interests.length; i++) {
      let interestEntry = interests[i];
      if (interestEntry.type === myInterest) {
        myDialogOptions = interestEntry.dialogOptionIds;
      }
    }
    // Grab dialog strings using ids
    let myDialogStrings = [];
    for (let dialogOptionId of myDialogOptions) {
      myDialogStrings.push(dialogOptions[dialogOptionId].dialog);
    }

    return myDialogStrings;
  },

  _onDerender() {
    if (this.currentConversation) this.currentConversation.destroy();
  }
};

export default CanSpeak;

let interests = [
  {
    id: 0,
    type: "*",
    dialogOptionIds: [124, 125]
  },
  {
    id: 1,
    type: "Alchemy",
    dialogOptionIds: [3, 79, 81, 83, 84, 85, 86]
  },
  {
    id: 2,
    type: "Animals",
    dialogOptionIds: [
      1,
      2,
      77,
      87,
      88,
      89,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123
    ]
  },
  {
    id: 3,
    type: "Artistry",
    dialogOptionIds: [4, 5, 91, 92, 93, 94]
  },
  {
    id: 4,
    type: "Blacksmithing",
    dialogOptionIds: [6, 7]
  },
  {
    id: 5,
    type: "Combat",
    dialogOptionIds: [9, 10, 11, 12, 13, 14, 77]
  },
  {
    id: 6,
    type: "Cooking",
    dialogOptionIds: [8, 15, 16, 17, 18, 19, 81, 83, 84, 87, 90]
  },
  {
    id: 7,
    type: "Dancing",
    dialogOptionIds: [20, 21, 22, 23, 24, 25]
  },
  {
    id: 8,
    type: "Deceit",
    dialogOptionIds: [26, 27, 28, 29, 30, 31, 32]
  },
  {
    id: 9,
    type: "Farming",
    dialogOptionIds: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 52]
  },
  {
    id: 10,
    type: "Fishing",
    dialogOptionIds: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
  },
  {
    id: 11,
    type: "Fortune Telling",
    dialogOptionIds: [0, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 81, 82, 86]
  },
  {
    id: 12,
    type: "Intelligence",
    dialogOptionIds: [64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 81]
  },
  {
    id: 13,
    type: "Intimidation",
    dialogOptionIds: [10, 12, 13, 14, 76, 78]
  },
  {
    id: 14,
    type: "Magic",
    dialogOptionIds: [0, 3, 77, 79, 80, 81, 83, 84, 85, 86, 87]
  },
  {
    id: 15,
    type: "Mercantilism",
    dialogOptionIds: [95, 96, 97, 98]
  },
  {
    id: 16,
    type: "Performance",
    dialogOptionIds: [104, 105, 106]
  },
  {
    id: 17,
    type: "Thievery",
    dialogOptionIds: [107, 108, 109]
  },
  {
    id: 18,
    type: "Seamanship",
    dialogOptionIds: [52, 53]
  },
  {
    id: 19,
    type: "Seduction",
    dialogOptionIds: [88]
  },
  {
    id: 20,
    type: "Street Savviness",
    dialogOptionIds: [97, 98, 99, 100, 101, 102, 103]
  },
  {
    id: 21,
    type: "Storytelling",
    dialogOptionIds: [3, 81, 86]
  },
  {
    id: 22,
    type: "Woodsmanship",
    dialogOptionIds: [1, 2, 52]
  },
  {
    id: 23,
    type: "Arrogance",
    dialogOptionIds: [76, 78]
  },
  {
    id: 24,
    type: "Fashion",
    dialogOptionIds: [89]
  }
];
let dialogOptions = [
  {
    id: 0,
    dialog: "I found a heart shaped constellation the other day",
    isComeOn: false
  },
  {
    id: 1,
    dialog: "I feel so at home in the woods...",
    isComeOn: false
  },
  {
    id: 2,
    dialog:
      "The animals have been acting strangely lately.... I wonder what's gotten into them",
    isComeOn: false
  },
  {
    id: 3,
    dialog:
      "The beauty of transitions, when one thing becomes another. That is the essence of life.",
    isComeOn: false
  },
  {
    id: 4,
    dialog: "I wish I could paint something as beautiful as you",
    isComeOn: true
  },
  {
    id: 5,
    dialog: "The imagination is integral to nature.",
    isComeOn: false
  },
  {
    id: 6,
    dialog: "Iron't you pretty... You steel my heart",
    isComeOn: true
  },
  {
    id: 7,
    dialog: "What was that? Sorry I can't hear you over this ringing...",
    isComeOn: false
  },
  {
    id: 8,
    dialog: "Another day, another burn.",
    isComeOn: false
  },
  {
    id: 9,
    dialog: "Bring it on. Come on... hit me baby. One more time.",
    isComeOn: false
  },
  {
    id: 10,
    dialog: "Come on then tough-o, show me what you got!",
    isComeOn: false
  },
  {
    id: 11,
    dialog: "You and me, arm wrestle. Right now.",
    isComeOn: false
  },
  {
    id: 12,
    dialog: "You think you're tough? I'll show you tough.",
    isComeOn: false
  },
  {
    id: 13,
    dialog: "Two hits: Me hitting you. You hitting the floor.",
    isComeOn: false
  },
  {
    id: 14,
    dialog: "Wanna meet my two friends? Dan and... Ger. ||| *raises fists*",
    isComeOn: false
  },
  {
    id: 15,
    dialog: "Something smells delectable",
    isComeOn: false
  },
  {
    id: 16,
    dialog: "I'd love to show you my favorite blend of herbs and spices",
    isComeOn: true
  },
  {
    id: 17,
    dialog: "My favorite meal is one made with love",
    isComeOn: false
  },
  {
    id: 18,
    dialog: "You make my head spin like no recipe has before",
    isComeOn: true
  },
  {
    id: 19,
    dialog: "Hey, is there any way to put u on my menu tonight?",
    isComeOn: true
  },
  {
    id: 20,
    dialog: "You make my heart beat and drop",
    isComeOn: true
  },
  {
    id: 21,
    dialog:
      "There's something about a good beat that just makes me want to get up and dance.",
    isComeOn: false
  },
  {
    id: 22,
    dialog: "Care to dance with me?",
    isComeOn: true
  },
  {
    id: 23,
    dialog: "I love moving to the rhythm of my heart, it's a real banger.",
    isComeOn: false
  },
  {
    id: 24,
    dialog: "*Does a spin move* Hello!",
    isComeOn: false
  },
  {
    id: 25,
    dialog:
      " Is your name music? Because... I can feel your rhythm in my heart.",
    isComeOn: true
  },
  {
    id: 26,
    dialog: "It's the truth. I swear!",
    isComeOn: false
  },
  {
    id: 27,
    dialog: "I love telling the truth. Nothing makes me happier.",
    isComeOn: false
  },
  {
    id: 28,
    dialog: "The truth. The whole truth, and nothing but the truth.",
    isComeOn: false
  },
  {
    id: 29,
    dialog: "People tell me I'm honest.",
    isComeOn: false
  },
  {
    id: 30,
    dialog: "People tell me I have an honest face.",
    isComeOn: false
  },
  {
    id: 31,
    dialog: "People tend to trust me.",
    isComeOn: false
  },
  {
    id: 32,
    dialog: "I will never fail to surprise you.",
    isComeOn: true
  },
  {
    id: 33,
    dialog: "It was an incredible harvest last year.",
    isComeOn: false
  },
  {
    id: 34,
    dialog: "I need some extra hands on the farm.",
    isComeOn: false
  },
  {
    id: 35,
    dialog: "I'd love to till your field.",
    isComeOn: true
  },
  {
    id: 36,
    dialog: "Im a morning person. I hope you are as well.",
    isComeOn: true
  },
  {
    id: 37,
    dialog: "When tilling season comes I can plant my seed in your field.",
    isComeOn: true
  },
  {
    id: 38,
    dialog: "I hope you like to get dirty.",
    isComeOn: true
  },
  {
    id: 39,
    dialog:
      "I hope you like trips, because I'd love to take you to the haybails and back.",
    isComeOn: true
  },
  {
    id: 40,
    dialog: "I've been awake since the crack of dawn.",
    isComeOn: false
  },
  {
    id: 41,
    dialog:
      "This year hasn't been treating me well... The rain is rare, the grass is yellow, and the cattle are hungry...",
    isComeOn: false
  },
  {
    id: 42,
    dialog: "I'm feeling really trac-torn...",
    isComeOn: false
  },
  {
    id: 43,
    dialog: "I wish you could be my catch today",
    isComeOn: true
  },
  {
    id: 44,
    dialog: "What a catch...",
    isComeOn: true
  },
  {
    id: 45,
    dialog: "The smell of the ocean always sets my heart free",
    isComeOn: false
  },
  {
    id: 46,
    dialog: "Hope you don't mind the smell",
    isComeOn: false
  },
  {
    id: 47,
    dialog: "Hook, line, and sinker.",
    isComeOn: false
  },
  {
    id: 48,
    dialog:
      "I've been fishing many years, but ive never caught a cutieel before....",
    isComeOn: true
  },
  {
    id: 49,
    dialog: "If I cast my rod, will you bite the hook?",
    isComeOn: true
  },
  {
    id: 50,
    dialog: "I'm not just looking for a hook-up...",
    isComeOn: true
  },
  {
    id: 51,
    dialog: "They say there's many fish in the sea, but I only want you.",
    isComeOn: true
  },
  {
    id: 52,
    dialog: "The weather was rough today.",
    isComeOn: false
  },
  {
    id: 53,
    dialog: "That storm wasnt for any rookie scallywag ",
    isComeOn: false
  },
  {
    id: 54,
    dialog: "All paths lead to a future with me.",
    isComeOn: true
  },
  {
    id: 55,
    dialog: "Show me your hands, ill tell you your future.",
    isComeOn: false
  },
  {
    id: 56,
    dialog: "I see pain in those eyes.",
    isComeOn: false
  },
  {
    id: 57,
    dialog: "When I look into your future, all I see is me.",
    isComeOn: true
  },
  {
    id: 58,
    dialog: " All roads lead to Rome. All of your choices lead to me.",
    isComeOn: true
  },
  {
    id: 59,
    dialog: "Ah, I've been expecting you",
    isComeOn: false
  },
  {
    id: 60,
    dialog: "I've seen today written in the stars.",
    isComeOn: false
  },
  {
    id: 61,
    dialog: "Look at me and you'll see your future.",
    isComeOn: false
  },
  {
    id: 62,
    dialog: "Don't leave, I can see pain in your future.",
    isComeOn: false
  },
  {
    id: 63,
    dialog: "I can see a future of us together",
    isComeOn: true
  },
  {
    id: 64,
    dialog:
      "Nothing like face-to-face meetings to brings knowledge and results. ",
    isComeOn: false
  },
  {
    id: 65,
    dialog: "To undertake research you need a knowledge base. ",
    isComeOn: false
  },
  {
    id: 66,
    dialog:
      "Support science liberally, but offer more incentive to expertise than to market interest. ",
    isComeOn: false
  },
  {
    id: 67,
    dialog: "To collect facts, I have read many texts. ",
    isComeOn: false
  },
  {
    id: 68,
    dialog:
      "Let your imagination grow in ways which are more influenced by your awareness of reality. ",
    isComeOn: false
  },
  {
    id: 69,
    dialog: "The wisdom of the crowd is often strong. ",
    isComeOn: false
  },
  {
    id: 70,
    dialog: "I'm so smart, I can answer every question. ",
    isComeOn: false
  },
  {
    id: 71,
    dialog: "What is more dishonest than a simple fact?",
    isComeOn: false
  },
  {
    id: 72,
    dialog:
      "Education never runs out. It's a sequence of lectures, with the biggest for the final. ",
    isComeOn: false
  },
  {
    id: 73,
    dialog:
      "I'm an intellectual. The rest of me is merely an reference to that. ",
    isComeOn: false
  },
  {
    id: 74,
    dialog: "Nothing is tiny to a great mind ",
    isComeOn: false
  },
  {
    id: 75,
    dialog:
      "Anything which exists, however unlikely, must be the reality if you have excluded the unthinkable. ",
    isComeOn: false
  },
  {
    id: 76,
    dialog: "Just because I’m letting you near me doesn’t mean I’m your friend",
    isComeOn: false
  },
  {
    id: 77,
    dialog: "If you were a frog I’d kiss you",
    isComeOn: true
  },
  {
    id: 78,
    dialog: "If you weren’t a peasant I’d think about going out with you.",
    isComeOn: true
  },
  {
    id: 79,
    dialog: "Have any fairy dust?",
    isComeOn: false
  },
  {
    id: 80,
    dialog: " I lost my wand, could you make me one?",
    isComeOn: false
  },
  {
    id: 81,
    dialog: "I'm looking for a special book to help me with a project.",
    isComeOn: false
  },
  {
    id: 82,
    dialog: "Have you seen my glass ball?",
    isComeOn: false
  },
  {
    id: 83,
    dialog: "I've been looking all over for some special ingredients.",
    isComeOn: false
  },
  {
    id: 84,
    dialog: "Could you help me find some mushrooms?",
    isComeOn: false
  },
  {
    id: 85,
    dialog: "Where is that eye of newt?",
    isComeOn: false
  },
  {
    id: 86,
    dialog:
      "Most prefer to condescend, and dismiss the supernatural for the realistic ",
    isComeOn: false
  },
  {
    id: 87,
    dialog: "Nothing like a good pair of frog legs.",
    isComeOn: false
  },
  {
    id: 88,
    dialog: "Rawr.",
    isComeOn: false
  },
  {
    id: 89,
    dialog: "Pig tails are so cute",
    isComeOn: false
  },
  {
    id: 90,
    dialog: "Egg tarts, when freshly baked, are a real delicacy.",
    isComeOn: false
  },
  {
    id: 91,
    dialog: "The artistic beauty of a garden is truly amazing.",
    isComeOn: false
  },
  {
    id: 92,
    dialog:
      "The creative development process is not exactly\nanalogous to simple manufacturing",
    isComeOn: false
  },
  {
    id: 93,
    dialog: "Create your masterpiece every day. ",
    isComeOn: false
  },
  {
    id: 94,
    dialog:
      "I fell in love with your face, the moment I saw it. A veritable masterpiece. ",
    isComeOn: true
  },
  {
    id: 95,
    dialog: "I'm great at finding items for half the usual price. ",
    isComeOn: false
  },
  {
    id: 96,
    dialog: "My shopping is thought through carefully. ",
    isComeOn: false
  },
  {
    id: 97,
    dialog:
      "There's an underground shopping district with all the best things!",
    isComeOn: false
  },
  {
    id: 98,
    dialog: "Have you ever heard of the underground shopping district? ",
    isComeOn: false
  },
  {
    id: 99,
    dialog: "One who lacks ingenuity is as good as useless. ",
    isComeOn: false
  },
  {
    id: 100,
    dialog: "I'm clever and resourceful, people tend to tell me.",
    isComeOn: false
  },
  {
    id: 101,
    dialog: "I love the city. The sounds, the smells. All of it.",
    isComeOn: false
  },
  {
    id: 102,
    dialog: "Always walk with caution down dark alleys! ",
    isComeOn: false
  },
  {
    id: 103,
    dialog: "Gamblers all over the city win money. Most lose, though.",
    isComeOn: false
  },
  {
    id: 104,
    dialog: "Give yourself a round of applause.",
    isComeOn: false
  },
  {
    id: 105,
    dialog: "This scene would be a bit stronger with some dramatic music.",
    isComeOn: false
  },
  {
    id: 106,
    dialog: "I'm a master of the dramatic.",
    isComeOn: false
  },
  {
    id: 107,
    dialog: "There's nothing like a narrow escape under the shadow of night.",
    isComeOn: false
  },
  {
    id: 108,
    dialog: "So many temptations everywhere...",
    isComeOn: false
  },
  {
    id: 109,
    dialog: "I'm innocent!",
    isComeOn: false
  },
  {
    id: 110,
    dialog: "Did you know bears can be as big as 8 feet long and 1000 pounds?",
    isComeOn: false
  },
  {
    id: 111,
    dialog: "Male birds are often more colorful than their female counterpart.",
    isComeOn: false
  },
  {
    id: 112,
    dialog: "The heart of a shrimp is in its head.",
    isComeOn: false
  },
  {
    id: 113,
    dialog:
      "Did you know that sea otters wrap themselves in seaweed to stay afloat while sleeping?",
    isComeOn: false
  },
  {
    id: 114,
    dialog: "Elephants are the only animals that can’t jump!",
    isComeOn: false
  },
  {
    id: 115,
    dialog: "Fleas can jump 100 times their height.",
    isComeOn: false
  },
  {
    id: 116,
    dialog: "The good thing about centaurs? Two animals in one!",
    isComeOn: false
  },
  {
    id: 117,
    dialog: "Roosters have bigger combs than hens!",
    isComeOn: false
  },
  {
    id: 118,
    dialog: "Snakes hate pigs.",
    isComeOn: false
  },
  {
    id: 119,
    dialog: "Male bass guard the eggs after the female lays them in the nest.",
    isComeOn: false
  },
  {
    id: 120,
    dialog: "The bat is the only mammal that can fly.",
    isComeOn: false
  },
  {
    id: 121,
    dialog: "For every human in the world there are one million ants",
    isComeOn: false
  },
  {
    id: 122,
    dialog: "What do u call a flamingo houseparty? |||  A flamingle.",
    isComeOn: false
  },
  {
    id: 123,
    dialog:
      "Cheetahs seize their prey using a combination of stealth and explosive acceleration!",
    isComeOn: false
  },
  {
    id: 124,
    dialog: "Are you an angel, or are my eyes deceiving me?",
    isComeOn: false
  },
  {
    id: 125,
    dialog: "Your lips are like roses.",
    isComeOn: false
  }
];
