import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListChampionService } from 'src/app/services/list-champion.service';
import { Champion } from 'src/app/Champion';
import { ChampionDetails } from 'src/app/ChampionDetails';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit{
  champion!: ChampionDetails ;
  

  constructor(
    private championService: ListChampionService,
    private location: Location,
    private route: ActivatedRoute,

  ){
    this.getChampion();
  }
  
  getChampion(): void{
    const id = this.route.snapshot.paramMap.get('id')!;
    this.championService.getChampion(id).subscribe((champion) => {
      this.champion = champion
      console.log(this.champion)
    });
    console.log(this.champion)
  }
  
}
