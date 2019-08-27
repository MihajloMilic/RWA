import { from, fromEvent, Subject, zip, interval, } from "rxjs";
import { debounceTime, map, switchMap, filter, scan, pairwise, take, timeInterval } from "rxjs/operators";
import { ajax } from 'rxjs/ajax';

const Teams = GetMatches();
const subscriber = Teams.pipe(filter(item => item.Time === 90)).subscribe(item => UpdateTable(item))

function getTeams(){
    return from(fetch(`http://localhost:3000/Teams`).then(res => res.json()));
}

function GetMatches() {
    var match =  from(fetch(`http://localhost:3000/Matches`).then(res => res.json()));

    return match
}


function Logic(Matches)
{
    
    Matches = Matches.pipe(filter(item => item.Time === 90), new Map(item => item.score = "1 : 1"))
    Matches.forEach(UpdateTable)

}

function UpdateTable(Match)
{
    console.log("Ovo je Jedan Metch " + Match )
    const Tabel = document.getElementById("Tabela");
    let row = document.createElement("tr");
    let data = document.createElement("th");
    data.innerHTML = Match.Team1.name;
    row.appendChild(data);
    data = document.createElement("th");
    data.innerHTML = Match.Score;
    row.appendChild(data);
    data = document.createElement("th");
    data.innerHTML = Match.Team2.name;
    row.appendChild(data);
    data = document.createElement("th");
    data.innerHTML = Match.Time;
    row.appendChild(data);
    Tabel.appendChild(row);
    
}