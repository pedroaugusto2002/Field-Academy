import { Injectable } from '@angular/core';
import { Champion } from '../Champion';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ChampionDetails } from '../ChampionDetails';

@Injectable({
  providedIn: 'root'
})
export class ListChampionService {
  
  constructor(private httpClient: HttpClient) {}
  
  
  getAll(): Observable<Champion[]>{
    return this.httpClient.get<{data:any}>('https://ddragon.leagueoflegends.com/cdn/13.4.1/data/pt_BR/champion.json').pipe(map((response) =>{
      return Object.values(response.data) as Champion[]
    }))
  }

  getChampion(id: string): Observable<ChampionDetails>{
    return this.httpClient.get<{data:any}>(`http://ddragon.leagueoflegends.com/cdn/13.4.1/data/pt_BR/champion/${id}.json`).pipe(map((response)=>{
      return response.data[id]
    }))
  }
}
