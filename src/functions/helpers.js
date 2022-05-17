const choose = (arr) => {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

const cards = [
  { name: "The Balance", icon: "", support: "tank", dps: "melee" },
  { name: "The Arrow", icon: "", support: "tank", dps: "melee" },
  { name: "The Spear", icon: "", support: "tank", dps: "melee" },
  { name: "The Bole", icon: "", support: "healer", dps: "ranged" },
  { name: "The Ewer", icon: "", support: "healer", dps: "ranged" },
  { name: "The Spire", icon: "", support: "healer", dps: "ranged" },
];

const jobs = {
  tanks: [
    { name: "Paladin", icon: "", type: "tank" },
    { name: "Warrior", icon: "", type: "tank" },
    { name: "Dark Knight", icon: "", type: "tank" },
    { name: "Gunbreaker", icon: "", type: "tank" },
  ],
  healers: [
    { name: "White Mage", icon: "", type: "healer" },
    { name: "Scholar", icon: "", type: "healer" },
    { name: "Astrologian", icon: "", type: "healer" },
    { name: "Sage", icon: "", type: "healer" },
  ],
  dps: [
    { name: "Monk", icon: "", type: "melee" },
    { name: "Dragoon", icon: "", type: "melee" },
    { name: "Ninja", icon: "", type: "melee" },
    { name: "Samurai", icon: "", type: "melee" },
    { name: "Reaper", icon: "", type: "melee" },
    { name: "Bard", icon: "", type: "ranged" },
    { name: "Machinist", icon: "", type: "ranged" },
    { name: "Dancer", icon: "", type: "ranged" },
    { name: "Black Mage", icon: "", type: "ranged" },
    { name: "Summoner", icon: "", type: "ranged" },
    { name: "Red Mage", icon: "", type: "ranged" },
  ],
};

export { choose, cards, jobs };
