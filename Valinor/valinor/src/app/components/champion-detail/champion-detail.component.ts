import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListChampionService } from 'src/app/services/list-champion.service';
import { ChampionDetails } from 'src/app/ChampionDetails';
import { ChampionsComponent } from '../champions/champions.component';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit{
  champion!: ChampionDetails ;
  spellSelected = 'p'
  loading? :  boolean;
  

  constructor(
    private championService: ListChampionService,
    private location: Location,
    private route: ActivatedRoute,

  ){
    this.getChampion();
  }

  idForUrl(){
    if(this.champion.key.length === 1){
      return `000${this.champion.key}`
    }
    else if(this.champion.key.length === 2){
      return `00${this.champion.key}`
    }
    else if(this.champion.key.length === 3){
      return `0${this.champion.key}`
    }
    return this.champion.key
  }

  showSpellDesc(spell: string){
   this.spellSelected = spell
  }

  getChampion(): void{
    this.loading = true
    const id = this.route.snapshot.paramMap.get('id')!;
    this.championService.getChampion(id).subscribe((champion) => {
      this.champion = champion
      this.loading = false
      console.log(this.champion)
    });
    console.log(this.champion)
  }
  
  skinCarrossel(newIdSkin : any){
    let skinFull = document.querySelector("#skinFull")
    let urlSkinFull = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${this.champion.id}_${newIdSkin}.jpg`
    skinFull?.setAttribute('src', urlSkinFull)

  }
}
