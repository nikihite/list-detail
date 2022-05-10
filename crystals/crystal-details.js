import { crystals } from '../crystals.js';
import { findById } from '../utils.js';

const params = new URLSearchParams(window.location.search);

const crystal = findById(params.get('id'), crystals);

const crystalName = document.getElementById('crystal-name');
crystalName.textContent = crystal.name;

const crystalImg = document.getElementById('crystal-img');
crystalImg.src = `../assets/${crystal.name}.jpeg`;

const chakrasP = document.getElementById('chakras-p');
chakrasP.textContent = crystal.chakras;

const crystalP = document.getElementById('healing-p');
crystalP.textContent = crystal.healingProperties;
