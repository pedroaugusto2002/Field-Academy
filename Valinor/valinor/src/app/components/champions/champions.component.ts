import { Component, OnInit } from '@angular/core';

import { ListChampionService } from 'src/app/services/list-champion.service';
import { Champion } from 'src/app/Champion';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit{
  champions: Champion[] = [];

  constructor(
    private ChampionService: ListChampionService
    
  ){
    this.getChampions();
  }

  getChampions(): void{
    this.ChampionService.getAll().subscribe((champion) => (this.champions = champion));
    console.log(Object.values(this.champions))
    
  }
}





  

  



