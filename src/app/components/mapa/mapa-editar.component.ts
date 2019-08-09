import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Marcador } from "src/app/classes/marcador.class";
@Component({
  selector: "app-mapa-editar",
  templateUrl: "./mapa-editar.component.html",
  styleUrls: ["./mapa-editar.component.css"]
})
export class MapaEditarComponent implements OnInit {
  forma: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador,
    public fb: FormBuilder
  ) {
    this.forma = fb.group({
      titulo: data.titulo,
      desc: data.desc
    });
  }

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCambios() {
    this.dialogRef.close(this.forma.value);
  }
}
