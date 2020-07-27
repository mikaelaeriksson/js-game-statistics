import { getData } from './fetchResults.js';

const TABLE = document.querySelector('#table');


function main() {

    getData().then(insertNumbers);
    getData().then(handleTeams);
    getData().then(insertOutcome);

}
main();

function insertNumbers(data) {
    var numbers = data.results.length;
    for (let index = 1; index < numbers + 1; index++) {

        let tr = document.createElement('tr');
        TABLE.appendChild(tr);

        let td = document.createElement('td');
        tr.appendChild(td);

        td.innerText = index;

    }
}


function handleTeams(data) {
    var allTeams = data.results.length;

    for (let index = 0; index < allTeams + 1; index++) {
        var team1;
        var team2;

        team1 = data.results[index].teams[1].name
        team2 = data.results[index].teams[2].name

        let teamColumn = document.querySelectorAll('tr')[index + 1];
        let td = document.createElement('td');

        let textTeam1 = document.createElement('a');
        let textVS = document.createElement('a');
        let textTeam2 = document.createElement('a');

        textTeam1.innerText = team1;
        textVS.innerText = ' -VS- ';
        textTeam2.innerText = team2;

        let homepage1 = data.results[index].teams[1].homepage;
        textTeam1.href = homepage1;
        let homepage2 = data.results[index].teams[2].homepage;
        textTeam2.href = homepage2;

        td.appendChild(textTeam1);
        td.appendChild(textVS);
        td.appendChild(textTeam2);

        teamColumn.appendChild(td);

    }
}


function insertOutcome(data) {
    var allOutcomes = data.results.length;
    for (let index = 0; index < allOutcomes; index++) {

        var outcome;
        outcome = data.results[index].outcome;

        const CHECKMARK = document.createElement('span');
        CHECKMARK.classList.add('checkmark');
        const checkmarkChild = document.createElement('span');
        checkmarkChild.classList.add('stem');
        const checkmarkChild2 = document.createElement('span');
        checkmarkChild2.classList.add('kick');
        CHECKMARK.appendChild(checkmarkChild);
        CHECKMARK.appendChild(checkmarkChild2);


        let column1 = document.querySelectorAll('tr')[index + 1];
        let td1 = document.createElement('td');
        td1.setAttribute('id', 'column1');
        column1.appendChild(td1);


        let columnX = document.querySelectorAll('tr')[index + 1];
        let tdX = document.createElement('td');
        tdX.setAttribute('id', 'columnX');
        columnX.appendChild(tdX);

        let column2 = document.querySelectorAll('tr')[index + 1];
        let td2 = document.createElement('td');
        td2.setAttribute('id', 'column2');
        column2.appendChild(td2);


        if (outcome == '1') {
            td1.appendChild(CHECKMARK);
        }

        else if (outcome == 'X') {
            tdX.appendChild(CHECKMARK);
        }
        else {
            td2.appendChild(CHECKMARK);
        }
    }
}