import { leagueProps, matchProp, teams_Matches } from "../types/tstypes";
import {  supabase } from "./db";

export const getAllleagues = async(SportId:string):Promise<leagueProps[] | undefined >=>{  
    try{
     let { data: leagues, error } = await supabase
    .from('leagues')
    .select("id,name")
    .eq('sport_id',SportId)
    if(leagues){
   
      return leagues
    }
    throw new Error(error?.message);
            
       }catch(e){
       console.error(e);
       }
      }

      const teams = async(matchid:string):Promise<teams_Matches[]>=>{
        let { data: teams, error } = await supabase
        .from('matches&teams')
        .select('*,teams(id,name,img)')
        .eq("match_id",`${matchid}`)
        if(teams){
          return teams
        }
        throw new Error(error?.message);        
      }
  
   export const getAllMatches=async(SportId:string,currentLeagueId?:string)=>{
    try{
    const rtnmatches:matchProp[] = [];
  let { data: matches} = await supabase
  .from('matches')
  .select('*')
  .eq('sport_id',SportId)
  // .eq('league_id',currentLeagueId?currentLeagueId:1)
  if(matches){
    const ids = matches.map((m)=>m.id)
       const allteams = await Promise.all(ids.map((id)=>teams(id)));
      allteams.map(PerMatchTeams=>(
        matches?.map(Match=>{
          if(Match.id === PerMatchTeams[0].match_id){
            rtnmatches.push({...Match,teams:PerMatchTeams})
          }
        })
      ))
      console.log("rtn matches : "+JSON.stringify(rtnmatches));
    return rtnmatches;
  }
  return undefined
  
    }catch(e){
        console.error(e);    
    }
  }