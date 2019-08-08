import { Component, OnInit } from "@angular/core";
import { Marcador } from "src/app/classes/marcador.class";

@Component({
  selector: "app-mapa",
  templateUrl: "./mapa.component.html",
  styleUrls: ["./mapa.component.css"]
})
export class MapaComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  marcadores: Marcador[] = [];

  constructor() {
    const nuevoMacador = new Marcador(51.678418, 7.809007);
    this.marcadores.push(nuevoMacador);
  }

  ngOnInit() {}
}
