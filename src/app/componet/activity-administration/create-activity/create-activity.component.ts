import { Component, OnInit } from '@angular/core';
import {Actividad} from '../../../modelo/actividad';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: string = 'crudActividades';

  mostrarNoptoficacion: string = '';
  mostrarbtnUpdate: boolean = true;
  mostrarbtnGuardar: boolean = false;
  mostrarForActualiza: boolean = true;
  indexActividadActualizar: number;

  textoH2Crear_o_Actualizar = 'Crear Actividad';

  arrayActividades: Actividad [] = [];

  modeloActividadeNew: Actividad = new Actividad();
  modeloAeditar: Actividad =  new Actividad();

  addActividadNueva(): void {
    this.arrayActividades.push(this.modeloActividadeNew);    
    this.modeloActividadeNew = new Actividad(); 
    this.mostrarNoptoficacion = 'Actividad Creada';
  }

  cerrarNotoficacion(){
    this.mostrarNoptoficacion = '';
  }  

  editarActividad(j) {    
    this.mostrarbtnGuardar = true;
    this.mostrarbtnUpdate = false;
    this.textoH2Crear_o_Actualizar = 'Actualizar Actividad';

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
          this.mostrarNoptoficacion = 'Actividad Actualizada';
          this.mostrarbtnUpdate = true;
          this.mostrarbtnGuardar = false;
          this.textoH2Crear_o_Actualizar = 'Crear Actividad';
      }
    }
  }

  eliminarActividad(i) {
    if (confirm('¿Desea realmente eliminar esta actividad ?')) {
        this.arrayActividades.splice(i, 1);
        this.mostrarNoptoficacion = 'Actividad eliminada';
    }
  }
}
