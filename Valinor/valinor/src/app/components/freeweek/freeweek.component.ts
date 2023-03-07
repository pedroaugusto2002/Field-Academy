import { Component, EventEmitter, Output } from '@angular/core';
import { OnInit } from '@angular/core';
import { ListChampionService } from 'src/app/services/list-champion.service';
import { Champion } from 'src/app/Champion';
import { debounceTime, interval } from 'rxjs';
@Component({
  selector: 'app-freeweek',
  templateUrl: './freeweek.component.html',
  styleUrls: ['./freeweek.component.css'],
  
})
export class FreeweekComponent implements OnInit {
  champions: Champion[] = []
  freeWeekChampions: any;
  loading = true
  keys: number = 0;

  selected? : any = 0
  selectedChampion?: any 
  stop: boolean = false;
  clock: any;
  
  
  

  constructor(private championService: ListChampionService) {
    this.FreeWeekChampions();
    this.carrossel();
    
  }
  ngOnInit(): void{
    
  }
  
  iconCenter(){
    
    console.log('icon center')
      let icon = document.querySelector('.icon.selectedIcon')
    console.log('terminei')
  }
  FreeWeekChampions(): void {
    this.championService.getFreeWeekChampions()
      .subscribe(
        (response) => {
          this.champions = response
          this.loading = false;
        });

  }

  carrossel(): void{
    this.selected = -1;
    this.clock = setInterval(():any =>{
      this.selected++

      this.selectedChampion = this.champions[this.selected].id
    
      if(this.selected + 1 === this.champions?.length){
        this.selected = -1;
      }
      this.iconCenter()
      console.log('carrossel')
    } , 3000)
    
  }

  selectClick(id: any):any{
    this.selectedChampion = id
    clearInterval(this.clock)
    
    this.iconCenter()

    
  }
}
