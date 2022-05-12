// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCrystal } from '../utils.js';
import { crystals } from '../crystals.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="crystal"><h1>Amethyst</h1><img src="./assets/Amethyst.jpeg"><p>Amethyst is used for calming and intuition</p><h2>Chakras:</h2><ul><li>Third Eye &amp; Crown</li></ul></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCrystal(crystals[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
