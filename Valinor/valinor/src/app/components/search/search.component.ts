import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Player, SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  player!: Player;
  searchValue = new FormControl('')

  constructor(
    private SearchService: SearchService 
  ){
  }
  ngOnInit(){
    this.searchValue.valueChanges.subscribe(text =>{
      if(!text) return
    })
  }

  searchPlayer(): void {
    let textValue = this.searchValue.value
    console.log('player name', this.searchValue.value)
    this.SearchService.seachProfile(textValue!)
    .subscribe
    ((response) =>{
      this.player = response
      return }

    )
  }


}
