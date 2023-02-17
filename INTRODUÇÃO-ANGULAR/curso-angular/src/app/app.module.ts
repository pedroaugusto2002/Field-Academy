import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TesteComponent } from './components/teste/teste.component';
import { OlamundoComponent } from './components/olamundo/olamundo.component';
import { HttpClientModule } from '@angular/common/http';
import { ChapionsComponent } from './components/chapions/chapions.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    OlamundoComponent,
    ChapionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
