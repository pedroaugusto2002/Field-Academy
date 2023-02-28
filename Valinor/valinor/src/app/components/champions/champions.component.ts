import { Component, OnDestroy, OnInit } from '@angular/core';
import {Injectable, NgModule} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {PageEvent} from '@angular/material/paginator';
import { ListChampionService } from 'src/app/services/list-champion.service';
import { Champion } from 'src/app/Champion';
import { Page, PageRequest } from 'src/app/_util/Pagination';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements  OnInit{
  champions: Champion[] = [];
  pageNow?: number;
  limit?: number;
  firstPageLabel = 'Primeira Pagina';
  itemsPerPageLabel = 'Itens Por Pagina';
  lastPageLabel = 'Ultima Pagina';

  searchText = new FormControl('')

  nextPageLabel = 'Proxima Pagina';
  previousPageLabel = 'Pagina Anterior';
  maxCount: any;
  
  searchTest = false

  

  getRangeLabel(page: number, pageSize: number, lenght: number): string{
    if(lenght === 0){
      return 'Pagina 1 de 1'
    }

    const amountPages = Math.ceil(lenght/pageSize)
    this.pageNow =  page
    this.limit = pageSize
    return `Page ${page + 1} de ${amountPages}`
  }

  pageEvent?: PageEvent | undefined
  
  constructor(
    private ChampionService: ListChampionService
    
  ){
    this.listChampions(0, 8)
  }
  ngOnInit(): void {
    this.searchText.valueChanges.subscribe(text => {
      console.log(text)
      if(!text) return
      
      this.search()
      
    })
  }
  /*getChampions(): void{
    this.ChampionService.getAll().subscribe(
      (champion) => (this.champions = champion));
    console.log(Object.values(this.champions))
    
  }*/

  listChampions(page: any, limit: any): void{
    
    this.ChampionService.getChampions(page+1, limit, this.searchText.value)
    .subscribe(
      (response) => {
        this.maxCount = response.totalCount
        this.champions = response.champions
      }
    )
  }

  search(){
    this.ChampionService.searchChampion(this.searchText.value)
    .subscribe(
      (response) => {
        this.maxCount = response.length
        this.champions=response
      }
    )
  }
}





  

  



