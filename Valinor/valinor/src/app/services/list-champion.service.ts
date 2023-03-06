import { Injectable } from '@angular/core';
import { Champion } from '../Champion';
import { debounceTime, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { ChampionDetails } from '../ChampionDetails';


@Injectable({
  providedIn: 'root'
})
export class ListChampionService {
  url?:string = 'http://localhost:3000/champions?';
  i: any;
  riotKey:string = 'RGAPI-fa0914f3-76f3-4655-9cd4-ffecdd71a705';
  
  constructor(private httpClient: HttpClient) {}

  getChampions(page: any, limit: any, text?: string | null): Observable<{totalCount: number, champions: Champion[]}>{
    return this.httpClient
    .get(`http://localhost:3000/champions?_page=${page}&_limit=${limit}&id_like=${text || ''}`, { observe: 'response'})
    .pipe(
      map((response) =>{
        
        return {
          totalCount: Number(response.headers.get("x-total-count")),
          champions: Object.values(response.body || {}) as Champion[]
        }
      },
      )
      
    )
  }

 
  getChampion(id: string): Observable<ChampionDetails>{
    return this.httpClient.get<{data:any}>(`http://ddragon.leagueoflegends.com/cdn/13.4.1/data/pt_BR/champion/${id}.json`)
    .pipe(map((response)=>{
      return response.data[id]
    }))
  }

  getFreeWeekChampions(): Observable<any>{
    return this.httpClient.get<{freeWeek:any}>(`https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${this.riotKey}`)
    .pipe(
      map((response) =>{
        console.log('response atual', response)
        return response
    }))
  }

  getChampionByKey(keys: any):Observable<any>{
    console.log(keys)    
    for (this.i = 0; this.i < 16 ; this.i++) {
      this.url= this.url + `key=${keys[this.i]}&`
      console.log(this.url)
    }
    return this.httpClient.get<{champions:any[]}>(`${this.url}`)
    .pipe(
      map((response) => {
        return response
      })
    )
  }
}
