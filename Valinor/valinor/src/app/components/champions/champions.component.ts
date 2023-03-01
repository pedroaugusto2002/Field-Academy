import { Component, OnDestroy, OnInit } from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { ListChampionService } from 'src/app/services/list-champion.service';
import { Champion } from 'src/app/Champion';
import { Page, PageRequest } from 'src/app/_util/Pagination';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit {
  champions: Champion[] = [];
  pageNow?= this.pageEvent?.pageIndex;


  searchText = new FormControl('')

  maxCount: any;

  pageEvent?: PageEvent | undefined

  constructor(
    private ChampionService: ListChampionService

  ) {
    this.listChampions(0, 8)
  }
  ngOnInit(): void {
    this.searchText.valueChanges.subscribe(text => {
      if (!text) return
      
    })
  }
  /*getChampions(): void{
    this.ChampionService.getAll().subscribe(
      (champion) => (this.champions = champion));
    console.log(Object.values(this.champions))
    
  }*/

  listChampions(page: any, limit: any, text?: Event | string ): void {
    let texto = this.searchText.value
    if(!page) page=0
    if(!limit) limit=8
    console.log(texto)
    if (texto) {
      this.ChampionService.getChampions(page+1, limit, texto)
        .subscribe(
          (response) => {
            this.maxCount = response.totalCount
            this.champions = response.champions
          }
        )
      return
    }
    this.ChampionService.getChampions(page + 1, limit, this.searchText.value)
      .subscribe(
        (response) => {
          this.maxCount = response.totalCount
          this.champions = response.champions
        }
      )
  }

  /*search(e: Event) {
    const target = e.target as HTMLInputElement
    const value = target.value
    this.ChampionService.searchChampion(value)
      .subscribe(
        (response) => {
          this.maxCount = response.length
          this.champions = response
        }
      )

  }*/

}











