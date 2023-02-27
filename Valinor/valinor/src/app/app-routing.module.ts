import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailComponent } from './components/champion-detail/champion-detail.component';
import { ChampionsComponent } from './components/champions/champions.component';

const routes: Routes = [
  {path:'', component:ChampionsComponent},
  {path:':id', component:ChampionDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
