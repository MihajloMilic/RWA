import { from, fromEvent, Subject, zip, interval, timer, of, Observable } from "rxjs";
import { debounceTime, map, switchMap, filter, scan, pairwise, take, timeInterval, takeUntil, merge, mergeMap, delay, takeLast, toArray  } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';




let interval$ = timer(0, Math.random()*10000);
let time$ = timer(0, 1000);
let gameEnd$ = timer(90000)
let matches$ = getMatches();
let pulledData$ = new Subject();
let pull$ = new Subject();
let teams$ = getTeams();
teams$.subscribe(el => updateScoreTable(el))

pull$ = time$.pipe(
    switchMap(() => matches$)
)
pulledData$ = interval$.pipe(
    switchMap(() => matches$)
);

pull$.pipe(takeUntil(gameEnd$)).subscribe(el => reduceTime(el))

pulledData$.pipe(takeUntil(gameEnd$)).subscribe(res => scoreGoal(res));
let subscribers$ = new Subject()
let endedMatches = from(zip(matches$, gameEnd$).pipe(map(el => el[0])))
endedMatches.subscribe(item => filterScores(subscribers$, item))
let firstTeamWin = subscribers$.pipe(filter(el => el.GoalsTeam1 > el.GoalsTeam2))
let secoundTeamWin = subscribers$.pipe(filter(el => el.GoalsTeam2 > el.GoalsTeam1))
let winners = firstTeamWin.pipe(merge(secoundTeamWin)).subscribe(el => {console.log("Mecevi sa Pobednicima su "); console.log(el)})

zip(endedMatches, teams$).subscribe(el => updateScore(el))



function getTeams() {
    return from(fetch(`http://localhost:3000/teams`).then(res => res.json()));
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

    return number % el;
}

function reduceTime(Match) {

    Match.forEach(el => {
        el.Time = el.Time + 1;
    })
    updateTable(Match);
}

function updateScore(match)
{
    match[0].forEach(el=>
        {
            if (el.GoalsTeam1>el.GoalsTeam2)
        {
            match[1].forEach(club =>
            {
                if (el.Team1.name === club.name)
                {
                    club.Points += 3;
                }
            })
        }
        else if(el.GoalsTeam2>el.GoalsTeam1)
        {
            match[1].forEach(club =>
                {
                    if (el.Team2.name === club.name)
                    {
                        club.Points += 3;
                    }
                })
        }
        else{
            match[1].forEach(club =>
                {
                    if (el.Team1.name === club.name || el.Team2.name === club.name)
                    {
                        club.Points += 1;
                    }
                })
        }
        })
    updateScoreTable(match[1])
}

function getLength(pulledData$) {
    let number = 0;
    pulledData$.forEach(el => {
        number++;
    })

    return number ;
}

function scoreGoal(match) {
    let numb = getLength(match);

    let index = scoreGoalRandomTeam(numb);
    let number = randomNumber() % 2;
    if (number === 0) {
        match[index].GoalsTeam1 = match[index].GoalsTeam1 + 1;
        match

    } else {
        match[index].GoalsTeam2 = match[index].GoalsTeam2 + 1;
    }

}
function filterScores(subscribers$, item) {
    item.forEach(el =>
        {
            subscribers$.next(el);
        }
        )
}


function updateTable(Match) {
    
    let Tabel = document.getElementById("Tabela");
    Tabel.style.border = "3px solid #000"
    Tabel.innerHTML = "";
    let head = document.createElement("thead")
    head.style.border = "3px solid #000 collapse"
    let row = document.createElement("tr");
    let data = document.createElement("th");
    data.innerHTML = "Team 1";
    data.style.border = "3px solid #000"
    row.appendChild(data);
    data = document.createElement("th");
    data.innerHTML = "Score";
    data.style.border = "3px solid #000"
    row.appendChild(data);
    data = document.createElement("th");
    data.innerHTML = "Team 2";
    data.style.border = "3px solid #000"
    row.appendChild(data);
    data = document.createElement("th");
    data.innerHTML = "Time";
    data.style.border = "3px solid #000"
    row.appendChild(data);
    head.appendChild(row)
    Tabel.appendChild(head);
    Match.forEach(el => {
        let row = document.createElement("tr");
        row.style.border = "3px solid #000"
        let data = document.createElement("th");
        data.style.border = "3px solid #000"
        data.innerHTML = el.Team1.name;
        row.appendChild(data);
        data = document.createElement("th");
        data.innerHTML = el.GoalsTeam1 + " : " + el.GoalsTeam2;
        data.style.border = "3px solid #000"
        row.appendChild(data);
        data = document.createElement("th");
        data.innerHTML = el.Team2.name;
        data.style.border = "3px solid #000"
        row.appendChild(data);
        data = document.createElement("th");
        data.innerHTML = el.Time;
        data.style.border = "3px solid #000"
        row.appendChild(data);
        Tabel.appendChild(row);
    })
}

function updateScoreTable(match)
{   
    let Tabel = document.getElementById("Scores");
    Tabel.style.border = "3px solid #000"
    Tabel.innerHTML = "";

    let row = document.createElement("tr");
    let data = document.createElement("th");
    data.innerHTML = "Team Name";
    data.style.border = "3px solid #000"
    row.appendChild(data);
    data = document.createElement("th");
    data.innerHTML = "Points";
    data.style.border = "3px solid #000"
    row.appendChild(data);
    Tabel.appendChild(row);
    match.forEach(el=>{
        let row = document.createElement("tr");
        row.style.border = "3px solid #000"
        let data = document.createElement("th");
        data.style.border = "3px solid #000"
        data.innerHTML = el.name;
        row.appendChild(data);
        data = document.createElement("th");
        data.innerHTML = el.Points;
        data.style.border = "3px solid #000"
        row.appendChild(data);
        Tabel.appendChild(row);
    })
    sortTable();
}
function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("Scores");
    switching = true;

    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].cells[1]
        y = rows[i + 1].cells[1]
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }