import { from, fromEvent, Subject, zip, interval, timer } from "rxjs";
import { debounceTime, map, switchMap, filter, scan, pairwise, take, timeInterval, takeUntil } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';




let interval$ = timer(0, 2000);
let time$ = timer(0, 1000);
let gameEnd$ = timer(10000)
let teams$ = getMatches();
let pulledData$ = new Subject();
let pull$ = new Subject();

pull$ = time$.pipe(
    switchMap(() => teams$)
)
pulledData$ = interval$.pipe(
    switchMap(() => teams$)
);


pull$.pipe(takeUntil(gameEnd$)).subscribe(el => reduceTime(el))

pulledData$.pipe(takeUntil(gameEnd$)).subscribe(res => scoreGoal(res));


// let endedMatches = zip(teams$, gameEnd$).pipe(map(el => el[0]))

// let winersHome = endedMatches.filter(item => item.GoalsTeam1 > item.GoalsTeam2).subscribe(el => console.log(el))
// let allWiningTeams = teams$.pipe(filter(T => T.GoalsTeam1 > 0))
// allWiningTeams.subscribe(el => console.log(" dsadas " + el));

function reduceTime(Match) {
    console.log("Uso sam");
    Match.forEach(el => {
        el.Time = el.Time - 1;
    })
    updateTable(Match);
}

function getTeams() {
    return from(fetch(`http://localhost:3000/Teams`).then(res => res.json()));
}

function getMatches() {
    return from(fetch(`http://localhost:3000/Matches`).then(res => res.json()));
}

function randomNumber() {
    let rand = Math.random() * 10;
    let number = Math.round(rand);
    return number;
}

function scoreGoalRandomTeam(el) {
    let rand = Math.random() * 10;
    let number = Math.round(rand);
    console.log(number);
    return number % el;
}


function getLength(pulledData$) {
    let number = 0;
    pulledData$.forEach(el => {
        number++;
    })
    console.log(number);
    return number - 1;
}

function scoreGoal(match) {
    console.log(match);
    let numb = getLength(match);

    let index = scoreGoalRandomTeam(numb);
    console.log(index);
    let number = randomNumber() % 2;
    if (number === 0) {
        match[index].GoalsTeam1 = match[index].GoalsTeam1 + 1;
        match

    } else {
        match[index].GoalsTeam2 = match[index].GoalsTeam2 + 1;
    }

}

function updateTable(Match) {
    let Tabel = document.getElementById("Tabela");
    Tabel.innerHTML = "";
    Match.forEach(el => {
        let row = document.createElement("tr");
        let data = document.createElement("th");
        data.innerHTML = el.Team1.name;
        row.appendChild(data);
        data = document.createElement("th");
        data.innerHTML = el.GoalsTeam1 + " : " + el.GoalsTeam2;
        row.appendChild(data);
        data = document.createElement("th");
        data.innerHTML = el.Team2.name;
        row.appendChild(data);
        data = document.createElement("th");
        data.innerHTML = el.Time;
        row.appendChild(data);
        Tabel.appendChild(row);
    })
}