import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {  SearchService } from 'src/app/services/search.service';
import { Player } from 'src/app/PlayerInfos.1';
import { ListChampionService } from 'src/app/services/list-champion.service';
import { Champion } from 'src/app/Champion';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  player!: Player;
  searchValue = new FormControl('')
  winrate?: number;
  champions: Champion[] = []
  

  constructor(
    private SearchService: SearchService,
    private ChampionService: ListChampionService 
  ){
  }
  ngOnInit(){
    this.searchPlayer()
    this.searchValue.valueChanges.subscribe(text =>{
      if(!text) return
    })
    
  }

  searchPlayer(): void {
    let textValue = this.searchValue.value
    //textValue!
    this.SearchService.seachProfile(textValue!)
    .subscribe
    ((response) =>{
      const [player, topChampions, leagues] = response
      player.topChampions = topChampions
      player.leagues = leagues
      this.player = player
      this.winrate = this.player.leagues[0].wins / (this.player?.leagues[0].wins + this.player?.leagues[0].losses) * 100
      
      player.leagues[0].winRate = this.winrate.toFixed(0)
      
      this.ChampionService.getChampionByKey(
      topChampions[0].championId, 
      topChampions[1].championId, 
      topChampions[2].championId)
      .subscribe(
      (response) =>{
        this.champions = response
        console.log('aaaaaaaaaaaaa', this.champions)
      })
    }
    )
  }


}
