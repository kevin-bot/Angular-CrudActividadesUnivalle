import { Component } from '@angular/core';
import {Actividad} from './modelo/actividad';
import { identifierModuleUrl } from '@angular/compiler';
import {NotificationService} from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'crudActividades';
  mostrarNoptoficacion: string = 'Menssage here';
}
