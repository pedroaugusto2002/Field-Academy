import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', component:ChampionsComponent,pathMatch:'full'},
  {path:'search', component: SearchComponent},
  {path:':id', component:ChampionDetailComponent},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
