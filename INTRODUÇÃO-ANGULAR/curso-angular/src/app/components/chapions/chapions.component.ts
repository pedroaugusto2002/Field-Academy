import { Component } from '@angular/core';
import { isConstructorDeclaration } from 'typescript';

@Component({
  selector: 'app-chapions',
  templateUrl: './chapions.component.html',
  styleUrls: ['./chapions.component.css']
});
export class ChapionsComponent {
  champion: object [] = []
};
constructor(private ChapionsService: ChampionService ){};
