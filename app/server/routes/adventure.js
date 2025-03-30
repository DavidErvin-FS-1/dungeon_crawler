const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

// Extended adventure story tree with detailed narrative branches
const adventureStory = {
  text: 'You stand before the ancient crypt door, its dark wood etched with mysterious runes. A chill wind carries faint whispers of secrets and danger. Do you push the door open?',
  yes: {
    text: 'With a deep breath, you push the heavy door open. The creak echoes into a long, torchlit corridor. Shadows dance along the walls as the door slams shut behind you. Two paths lie ahead: a descending passage into the crypt’s depths and a winding staircase that ascends toward a grand hall. Which path do you choose? (Yes for descending)',
    yes: {
      text: 'You choose the descending passage. The air grows colder as you descend into darkness. Damp stone walls bear faded murals of a lost civilization. Soon, you encounter a sealed chamber where a pedestal cradles a softly glowing artifact. Do you take the artifact? (Yes to take it)',
      yes: {
        text: 'The moment you grasp the artifact, a surge of energy floods your senses. Visions of ancient battles and heroic feats overwhelm you. In the flickering light, you notice a hidden door appear behind the mural. Do you open the hidden door? (Yes to open it)',
        yes: {
          text: 'You open the hidden door, revealing a secret chamber brimming with treasures, relics, and scrolls that whisper of forgotten lore. Your destiny is forever changed as you embrace the knowledge within.',
        },
        no: {
          text: "Unsure of the consequences, you let go of the artifact. The chamber's light dims and silence falls. Regret lingers as you back away, wondering if some mysteries are best left unexplored.",
        },
      },
      no: {
        text: 'Deciding against disturbing the relic, you leave it undisturbed on its pedestal. As you turn to retreat, the chamber trembles and reveals a narrow hidden passage winding deeper into the crypt. Do you follow this mysterious path? (Yes to follow)',
        yes: {
          text: 'You follow the hidden passage, which leads you to an ancient library filled with crumbling scrolls and dusty tomes. Each word you read hints at powerful secrets and long-lost wisdom, sparking a quest for knowledge that may change your fate.',
        },
        no: {
          text: 'You decide not to risk the unknown passage. As you leave, the heavy door slams behind you, leaving a haunting sense of missed opportunity.',
        },
      },
    },
    no: {
      text: 'Instead of descending, you take the winding staircase that ascends toward a grand hall adorned with intricate tapestries and towering statues. At its center stands a massive door inscribed with an enigmatic riddle. Do you attempt to solve the riddle? (Yes to solve)',
      yes: {
        text: 'You carefully study the riddle, piecing together clues from the art and architecture around you. After a tense moment of insight, you whisper the answer. The massive door creaks open to reveal a luminous chamber filled with ancient wisdom and prophetic visions.',
      },
      no: {
        text: 'Intimidated by the mysterious inscription, you decide not to risk the riddle. Disappointed, you leave the grand hall, burdened by the echoes of what might have been.',
      },
    },
  },
  no: {
    text: 'You decide not to push the door open, turning your back on the ominous crypt. However, a soft, persistent whisper in the wind stokes your curiosity, hinting at untold wonders hidden within. Do you pause and reconsider? (Yes to reconsider)',
    yes: {
      text: 'Compelled by the promise of hidden secrets, you return to the crypt door. With newfound resolve, you push it open and step into the unknown, where your adventure unfolds with both promise and peril.',
    },
    no: {
      text: 'Resolute in your decision, you continue on your way, leaving the crypt and its mysteries behind. Yet, deep inside, you wonder if fate has just slipped through your fingers.',
    },
  },
}

router.get('/', authMiddleware, (req, res) => {
  res.json({ story: adventureStory })
})

module.exports = router
