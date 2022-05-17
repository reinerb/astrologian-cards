// Card image imports
import balance from "../images/cards/balance.png";
import arrow from "../images/cards/arrow.png";
import spear from "../images/cards/spear.png";
import bole from "../images/cards/bole.png";
import ewer from "../images/cards/ewer.png";
import spire from "../images/cards/spire.png";

// Job image imports
import pld from "../images/jobs/pld.png";
import war from "../images/jobs/war.png";
import drk from "../images/jobs/drk.png";
import gnb from "../images/jobs/gnb.png";
import whm from "../images/jobs/whm.png";
import sch from "../images/jobs/sch.png";
import ast from "../images/jobs/ast.png";
import sge from "../images/jobs/sge.png";
import mnk from "../images/jobs/mnk.png";
import drg from "../images/jobs/drg.png";
import nin from "../images/jobs/nin.png";
import sam from "../images/jobs/sam.png";
import rpr from "../images/jobs/rpr.png";
import brd from "../images/jobs/brd.png";
import mch from "../images/jobs/mch.png";
import dnc from "../images/jobs/dnc.png";
import blm from "../images/jobs/blm.png";
import smn from "../images/jobs/smn.png";
import rdm from "../images/jobs/rdm.png";

const choose = (arr) => {
  let idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

const cards = [
  { name: "The Balance", icon: balance, support: "tank", dps: "melee" },
  { name: "The Arrow", icon: arrow, support: "tank", dps: "melee" },
  { name: "The Spear", icon: spear, support: "tank", dps: "melee" },
  { name: "The Bole", icon: bole, support: "healer", dps: "ranged" },
  { name: "The Ewer", icon: ewer, support: "healer", dps: "ranged" },
  { name: "The Spire", icon: spire, support: "healer", dps: "ranged" },
];

const jobs = {
  tanks: [
    { name: "Paladin", abbr: "PLD", icon: pld, type: "tank" },
    { name: "Warrior", abbr: "WAR", icon: war, type: "tank" },
    { name: "Dark Knight", abbr: "DRK", icon: drk, type: "tank" },
    { name: "Gunbreaker", abbr: "GNB", icon: gnb, type: "tank" },
  ],
  healers: [
    { name: "White Mage", abbr: "WHM", icon: whm, type: "healer" },
    { name: "Scholar", abbr: "SCH", icon: sch, type: "healer" },
    { name: "Astrologian", abbr: "AST", icon: ast, type: "healer" },
    { name: "Sage", abbr: "SGE", icon: sge, type: "healer" },
  ],
  dps: [
    { name: "Monk", abbr: "MNK", icon: mnk, type: "melee" },
    { name: "Dragoon", abbr: "DRG", icon: drg, type: "melee" },
    { name: "Ninja", abbr: "NIN", icon: nin, type: "melee" },
    { name: "Samurai", abbr: "SAM", icon: sam, type: "melee" },
    { name: "Reaper", abbr: "RPR", icon: rpr, type: "melee" },
    { name: "Bard", abbr: "BRD", icon: brd, type: "ranged" },
    { name: "Machinist", abbr: "MCH", icon: mch, type: "ranged" },
    { name: "Dancer", abbr: "DNC", icon: dnc, type: "ranged" },
    { name: "Black Mage", abbr: "BLM", icon: blm, type: "ranged" },
    { name: "Summoner", abbr: "SMN", icon: smn, type: "ranged" },
    { name: "Red Mage", abbr: "RDM", icon: rdm, type: "ranged" },
  ],
};

export { choose, cards, jobs };
