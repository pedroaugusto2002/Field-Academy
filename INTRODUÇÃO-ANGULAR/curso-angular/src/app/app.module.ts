import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { OlamundoComponent } from './components/olamundo/olamundo.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    OlamundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
