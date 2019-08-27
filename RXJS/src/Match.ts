import {Team} from "./Team"

export class Match{

    Stadion : string;
    Team1 : Team;
    Team2 : Team;
    GoalsHome : number;
    GoalsGuest  : number;
    time : string;
    constructor(Stadion:string, Team1:Team, Team2:Team, time:string){
        this.Stadion = Stadion;
        this.Team1 = Team1;
        this.Team2 = Team2;
        this.GoalsHome = 0;
        this.GoalsGuest = 0;
        this.time = time;


    } 

    GolHome()
    {
        this.GoalsHome = this.GoalsHome + 1;
    }

    GoalGuest()
    {
        this.GoalsGuest = this.GoalsGuest +1;
    }

    GetResult()
    {
       var result = "";
       result += this.GolHome + " : " + this.GoalGuest;
       return result;
    }
}