export type sportProps = {
    id:number,
    name:string,
    img:string
}
export type leagueProps = {
    id:number,
    name:string,
}
export type teamProp = {
    id:number,
    name:string,
    img:string
}
export type matchProp={
    id:number,
    sport_id:number,
    league_Id:number,
    match_datetime:string,
    status:string,
    avaliable:boolean,
    teams:teams_Matches[]
    stream_links:string[]
    
}
export type teams_Matches = {
    id:number,
    match_id:number,
    team_id:number,
    teams:teamProp
}