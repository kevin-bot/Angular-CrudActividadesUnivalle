import { Component, OnInit } from '@angular/core';
import {Actividad} from '../../../modelo/actividad';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  mostrarNoptoficacion = 'Text here';

  navbarselectect = '';
  subtitleh2: string = 'Crear Actividad ' ;
  mostrarbtnUpdate: boolean = true;
  mostrarbtnGuardar: boolean = false;
  mostrarForActualiza: boolean = true;
  indexActividadActualizar: number;
  arrayActividades: Actividad [] = [];

  modeloActividadeNew: Actividad = new Actividad();
  modeloAeditar: Actividad =  new Actividad();
  constructor() { }

  ngOnInit() {
  }

  updateh2(actividad: string) {
    this.subtitleh2 = 'Crear Actividad ' + actividad;
    this.modeloActividadeNew.categoria = actividad;
  }

  addActividadNueva(): void {
      this.arrayActividades.push(this.modeloActividadeNew);
      this.modeloActividadeNew = new Actividad();
  }

  editarActividad(j) {
    this.mostrarbtnGuardar = true;
    this.mostrarbtnUpdate = false;

    this.modeloAeditar.titulo = this.arrayActividades[j].titulo;
    this.modeloAeditar.descripcion = this.arrayActividades[j].descripcion;
    this.modeloAeditar.fecha = this.arrayActividades[j].fecha;
    this.modeloAeditar.hora = this.arrayActividades[j].hora;
    this.modeloAeditar.lugar = this.arrayActividades[j].lugar;
    this.indexActividadActualizar = j;
  }

  actualizarActividad() {
    let i = this.indexActividadActualizar;
    for (let j = 0; j < this.arrayActividades.length; j++) { 
      if ( i === j) {
          this.arrayActividades[i] = this.modeloAeditar;
          this.modeloAeditar = new Actividad();
          this.mostrarbtnUpdate = true;
          this.mostrarbtnGuardar = false;
      }
    }
  }

  eliminarActividad(i) {
    if (confirm('¿Desea realmente eliminar esta actividad ?')) {
        this.arrayActividades.splice(i, 1);
    }
  }
}
