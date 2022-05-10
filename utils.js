export function renderCrystal(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');

    const h1 = document.createElement('h1');
    h1.textContent = crystal.name;

    const img = document.createElement('img');
    img.src = crystal.image;

    const p = document.createElement('p');
    p.textContent = `${crystal.name} is used for ${crystal.healingProperties}`;

    const h2 = document.createElement('h2');
    h2.textContent = 'Chakras:';

    const ul = document.createElement('ul');
    for (let chakra of crystal.chakras) {
        const li = document.createElement('li');
        li.textContent = chakra;
        ul.append(li);
    }

    div.append(h1, img, p, h2, ul);
    return div;
}

export function findById(id, data) {
    return data.find((item) => item.id === id);
}

export function renderListItem(crystal) {
    const div = document.createElement('div');
    div.classList.add('crystal');
    div.style.top = crystal.top;
    div.style.left = crystal.left;

    const img = document.createElement('img');
    img.src = `./assets/${crystal.name}.jpeg`;

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('name');

    const a = document.createElement('a');
    a.href = `./crystals/?id=${crystal.id}`;
    a.textContent = crystal.name;

    return div;
}