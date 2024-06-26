const jobMetadata = {
   "scientist": {
      initResources: 1,
      initTechCards: 3,
      skill: (level) => `Treat ${level} nearby (both diagonal and adjacent) free slot(s) as your station to help play tech cards`,
      traits: ["beginner-friendly"],
   },
   "spiritual-leader": {
      initResources: 2,
      initTechCards: 3,
      skill: (level, playersCount) => `Gain ${isNaN(level) ? level + `*${playersCount+1}` : level*(playersCount+1)} population each turn`,
      traits: ["beginner-friendly"],
   },
   "engineer": {
      initResources: 1,
      initTechCards: 3,
      skill: (level) => `Can use ${level} other adjacent station(s) to help play tech cards`,
      traits: ["beginner-friendly"],
   },
   "hacker": {
      initResources: 2,
      initTechCards: 2,
      skill: (level) => `Can reroll ${level} time(s) per turn, hacker always starts first`,
      traits: ["beginner-friendly", "always-start-first"],
   },
   "politician": {
      initResources: 1,
      initTechCards: 2,
      skill: (level) => `During the beginning of playing card phase choose upto 1 player, you can use ${level} station(s) of them to help playing for Tech cards, if you play it this way everyone draws a tech card, the drawing effect happens only once each turn`,
   },
   "ruler": {
      initResources: 2,
      initTechCards: 2,
      skill: (level) => `Each turn you must declare to activate ${level} law(s), options are ['no-build', 'no-gain-resource', 'no-draw', 'no-play-card'], at least 1 law must be changed each turn, whenever you punish players, the most-violated player(s) need to take the most penalties`,
      traits: ["advanced-strategy-required"],
   },
   "spy": {
      initResources: 1,
      initTechCards: 0,
      skill: (level) => `After the end of your turn you can choose to spy a player, whenever they play a tech card you can draw ${level} tech card(s) and also if you play a tech card, the player that you are spying on will also draw a tech card, you can only play tech cards when no player has less stations than you, you can play the same tech card 2 times in a turn`,
   },
   "botanist": {
      initResources: 2,
      initTechCards: 2,
      skill: (level) => `When the slot roll matches with one of your stations, you gain upto ${level} extra effect(s), depending on the number of connected slots with the same slot type, also when your station is being destroyed you can spend 1 resource to prevent it, you can only gain extra effect(s) when there is at least 1 player that has stations more than you, you can build up to 3 stations in a turn in the build phase`,
   },
}
