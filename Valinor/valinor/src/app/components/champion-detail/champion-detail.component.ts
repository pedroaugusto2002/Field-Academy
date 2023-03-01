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

  showSpellDesc(spellID: string){
   let classToRemove = document.querySelector(".showOn")
   let lore = document.querySelector(".lore")
   let classToShow = document.getElementById(spellID)

   if(classToShow?.className === 'spell showOn'){
    classToShow.classList.remove('showOn')
    classToShow.classList.add('showOff')

    return
   }
   if(classToRemove){
    classToRemove.classList.remove('showOn')
    classToRemove.classList.add('showOff')
    
   }
   
   
    classToShow?.classList.remove('showOff')
    classToShow?.classList.add('showOn')

  
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
