import { Component, OnInit } from '@angular/core';
import {Injectable, NgModule} from '@angular/core';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {PageEvent} from '@angular/material/paginator';
import { ListChampionService } from 'src/app/services/list-champion.service';
import { Champion } from 'src/app/Champion';
import { Page, PageRequest } from 'src/app/_util/Pagination';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit{
  champions: Champion[] = [];
  pageNow?: number;
  limit?: number;
  firstPageLabel = 'Primeira Pagina';
  itemsPerPageLabel = 'Itens Por Pagina';
  lastPageLabel = 'Ultima Pagina';

  nextPageLabel = 'Proxima Pagina';
  previousPageLabel = 'Pagina Anterior';
  maxCount: any;

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
  /*getChampions(): void{
    this.ChampionService.getAll().subscribe(
      (champion) => (this.champions = champion));
    console.log(Object.values(this.champions))
    
  }*/

  listChampions(page: any, limit: any): void{
    
    this.ChampionService.getChampions(page+1, limit)
    .subscribe(
      (champions) => {this.champions = champions}
    )
    this.maxCount = this.ChampionService.getTotalCounts()
    .subscribe(
      (counts) => {this.maxCount = counts}
      
    )
  }
}





  

  



