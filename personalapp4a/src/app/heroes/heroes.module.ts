import { NgModule } from "@angular/core";
import { HeroeMainPageComponent } from "./main-page/main-page.component";
import { ListComponent } from './list/list.component';

@NgModule({
  declarations:[HeroeMainPageComponent, ListComponent],
  imports:[],///Solo se agrega otros modulos
  providers:[],////Se agregan los servicios
  exports:[HeroeMainPageComponent],///aqui se pone para que sea global

})
export class HeroesModule{

}
