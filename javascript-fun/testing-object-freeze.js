import deepFreeze from 'deep-freeze';

let nintendoSwitch = {
    games: ['Mario Kart', 'Zelda: BOTW'],
    controllers: ['Pro controller', 'joy-cons'],
    color: 'black',
    price: 299.99
};

deepFreeze(nintendoSwitch);
// let frozenNintendoSwitch = Object.freeze(nintendoSwitch);

nintendoSwitch.games.push('splatoon 2');
nintendoSwitch.price = 400;

console.log(nintendoSwitch);