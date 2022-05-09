// import functions and grab DOM elements
import { crystals } from './crystals.js';
import { renderCrystal } from './utils.js';
// let state
const crystalListElem = document.getElementById('crystals');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let crystal of crystals) {
    const crystalDiv = renderCrystal(crystal);
    crystalListElem.append(crystalDiv);
}