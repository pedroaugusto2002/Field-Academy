import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { OlamundoComponent } from './components/olamundo/olamundo.component';
import { TesteComponent } from './components/teste/teste.component';

const routes: Routes = [
  {path: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg', component: OlamundoComponent},
  {path: 'olamundo', component: OlamundoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
