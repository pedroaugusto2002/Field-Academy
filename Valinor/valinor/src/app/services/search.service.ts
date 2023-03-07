import { Injectable } from '@angular/core';
import { Champion } from '../Champion';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

const api_key = 'RGAPI-307059cf-cc4e-4c31-84ce-e3a3f55a3c01'
export interface Player{
  id: string,
  accountId: string,
  puuid: string,
  name: string,
  profileIconId: string,
  revisionDate: string,
  summonerLevel: string
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient ) { }

  seachProfile(searchValue: string):Observable<any>{
    console.log(searchValue)
    return this.httpClient
    .get<{data: Player}>(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchValue}?api_key=${api_key}`)
    .pipe(
      map((response) =>
      {
        console.log('response console', response)
        return response
      })
    )
  }
}
