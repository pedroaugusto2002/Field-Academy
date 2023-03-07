import { Injectable } from '@angular/core';
import { League, Player, TopChampion } from '../PlayerInfos.1';
import {
  
  concatMap,
  forkJoin,
 
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

const api_key = 'RGAPI-307059cf-cc4e-4c31-84ce-e3a3f55a3c01';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  seachProfile(searchValue: string): Observable<[Player, TopChampion[], League[]]> {
    return this.httpClient
      .get<Player>(
        `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchValue}?api_key=${api_key}`
      )
      .pipe(
        concatMap((response) => {
          const { id } = response;
          return forkJoin([of(response), this.httpClient.get<any>(
              `https://br1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}/top?api_key=${api_key}`
            ),
            this.httpClient.get<any>(
              `https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`
            )]);
        })
      );
  }
}
