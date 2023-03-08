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

const api_key = 'RGAPI-fabbcc5e-2bbf-432d-9f1c-2b0da3ce2737';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}

  seachProfile(searchValue: string): Observable<[Player, TopChampion[], League[]]> {
    return this.httpClient
      .get<Player>(
        //${searchValue}
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
