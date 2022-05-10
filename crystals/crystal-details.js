import { crystals } from '../crystals.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const crystal = findById(params.get('id'), crystals);

const crystalName = document.getElementById('crystal-name');
crystalName.textContent = crystal.name;

const crystalImg = document.getElementById('crystal-img');
crystalImg.src = `../assets/${crystal.name}.jpeg`;

const crystalP = document.getElementById('crystal-p');
crystalP.textContent = crystal.healingProperties;