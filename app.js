// import functions and grab DOM elements
import { crystals } from './crystals.js';
import { renderListItem } from './utils.js';
// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

const main = document.querySelector('main');

for (let crystal of crystals) {
    const crystalDiv = renderListItem(crystal);
    main.append(crystalDiv);
}