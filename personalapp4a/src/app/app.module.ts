import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule///Aqui se agrega el archivo para que funcione la etiqueta
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
