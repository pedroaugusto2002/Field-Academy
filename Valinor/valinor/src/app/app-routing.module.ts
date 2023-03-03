import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', component:ChampionsComponent},
  {path:':id', component:ChampionDetailComponent},
  {path:':search', component: SearchComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
