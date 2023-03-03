import { Injectable } from '@angular/core';
import { Champion } from '../Champion';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

const api_key = 'RGAPI-c9c0b38c-114b-4fd1-b77e-3aad3db6cac9'
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
