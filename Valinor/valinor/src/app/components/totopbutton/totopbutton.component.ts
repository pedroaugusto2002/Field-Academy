import { Component } from '@angular/core';

@Component({
  selector: 'app-totopbutton',
  templateUrl: './totopbutton.component.html',
  styleUrls: ['./totopbutton.component.css']
})
export class TotopbuttonComponent {
  totop(){
    window.scroll(0,0)
  }
}
