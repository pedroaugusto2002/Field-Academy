import { Injectable } from '@angular/core';
import { Champion } from '../Champion';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ChampionDetails } from '../ChampionDetails';
import { Page, QueryBuilder } from '../_util/Pagination';

@Injectable({
  providedIn: 'root'
})
export class ListChampionService {
  
  constructor(private httpClient: HttpClient) {}
  
  getChampions(page: any, limit: any): Observable<Champion[]>{
    return this.httpClient
    .get<{data:any}>(`http://localhost:3000/champions?_page=${page}&_limit=${limit}`)
    .pipe(
      map((response) =>{
        return Object.values(response) as Champion[]
      })
     
    )
    

  }
  
  /*getAll(): Observable<Champion[]>{
    return this.httpClient
    .get<{data:any}>('http://localhost:3000/champions')
    .pipe(
      map((response) =>
      {
      return Object.values(response) as Champion[]
      }
    ))
    
  }*/
  getTotalCounts(): Observable<Champion[]>{
    return this.httpClient
    .get<{data:any}>('http://localhost:3000/champions')
    .pipe(
      map((response) =>
      {
      return response.data.headers.get()
      }
    ))
    
  }

  getChampion(id: string): Observable<ChampionDetails>{
    return this.httpClient.get<{data:any}>(`http://ddragon.leagueoflegends.com/cdn/13.4.1/data/pt_BR/champion/${id}.json`)
    .pipe(map((response)=>{
      return response.data[id]
    }))
  }
}
