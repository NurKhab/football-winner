'use strict';

const matches = ['ajax_x', 'aintracht_x', 'napoli_x', 'brugge_x', 'atm_x', 'inter_x', 'barca_x', 'tth_x'];
const choosers = ['nurkhab', 'clown_net'];
const user1Data = [], user2Data = [];

const form = document.getElementById('form');

var isFirstMade = false, isSecondMade = false;

form.addEventListener('submit', getFormValue);

function getFormValue(event) {
    event.preventDefault();

    const game = form.querySelector('[name="game"]'),
        score1 = form.querySelector('[name="score1"]'),
        score2 = form.querySelector('[name="score2"]'),
        chooser = form.querySelector('[name="chooser"]');


    const data = {
        game: game.value,
        score1: score1.value,
        score2: score2.value,
        chooser: chooser.value,
    };

    if (data.chooser === 'nurkhab') {
        if (!isFirstMade) {
            user1Data.push(data.chooser);
            isFirstMade = true;
        } 

        user1Data.push(data.game, data.score1, data.score2);
        
    } else {
        if (!isSecondMade) {
            user2Data.push(data.chooser);
            isSecondMade = true;
        }

        user2Data.push(data.game, data.score1, data.score2);
    }
    alert('Отправлено!');
}

console.log(user1Data);
console.log(user2Data);