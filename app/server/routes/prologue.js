const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()

// Extended prologue story with more details for the dungeon crawler game
const prologueStory = [
  'As dusk falls, you arrive at a bustling town filled with wary eyes and hushed voices.',
  'The cobblestone streets echo with the footsteps of those who dare not speak of the mysteries beyond the town gates.',
  'In the dim lamplight, locals exchange fearful glances while murmuring about an ancient crypt hidden at the edge of town, a relic of a forgotten era.',
  'They say it was built by a secretive order, and its walls still whisper dark curses and lost legends.',
  'Amid stern warnings from wise elders, rumors persist of grand artifacts imbued with magical power lying dormant within its depths.',
  'Legends tell of heroes who once ventured inside, emerging forever changed, few with fortune, many swallowed by the shadows.',
  'Despite the looming specter of doom, an irresistible curiosity draws you toward the foreboding crypt door.',
  'With every cautious step, the weight of destiny grows heavier, and you feel that your fate is intertwined with the secrets that lie beyond.',
  'The night is thick with both dread and hope, setting the stage for an adventure where only the brave dare to uncover the truth.',
]

router.get('/', authMiddleware, (req, res) => {
  res.json({ story: prologueStory })
})

module.exports = router
