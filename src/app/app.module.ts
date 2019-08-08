import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { MapaComponent } from "./components/mapa/mapa.component";

import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [AppComponent, MapaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDKtrAkXrf-nNqFkK2NwVS1ZDEpqXpG7U8"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
