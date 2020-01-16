import { Component, OnInit } from '@angular/core';
import {Actividad} from '../../../modelo/actividad';

import {ServiceService} from '../../../services/service.service';
import { DocumentReference } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoFormComponent } from '../../todo-form/todo-form.component';
import { ActividadView } from 'src/app/modelo/actividad-view';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent {

  constructor(private modalService: NgbModal, private todoService: ServiceService) { }
  activities: ActividadView[] = [];

  ngOnInit() {
    this.activities = [];
    this.loadActivity();
  }

  

  loadActivity() {
    this.todoService.getTodos().subscribe(response => {
      this.activities = [];
      response.docs.forEach( value => {
        const data = value.data();
        const ida = value.id;
        const act: ActividadView = {
          id: ida,
          titulo: data.titulo,
          descripcion: data.descripcion,
          fecha: data.fecha,
          hora: data.hora,
          lugar: data.lugar,
          categoria: data.categoria,
          createDate: data.createDate,
          lastModifiedDate: data.lastModifiedDate.toDate()
        };
        this.activities.push(act);
      });

    });
  }
  clickAddTodo() {
      const modal = this.modalService.open(TodoFormComponent);
      modal.result.then(
        this.handleModalTodoFormClose.bind(this),
        this.handleModalTodoFormClose.bind(this)
      );
  }


  handleModalTodoFormClose(response) {
    if (response === Object(response)) {
      response.activity.id = response.id;
      this.activities.unshift(response.activity);
    } else {
      let index  = this.activities.findIndex(value => value.id === response.id);
      this.activities[index] = response.activity;
    }
  }


  editActivity(activity: ActividadView) {
    const modal = this.modalService.open(TodoFormComponent);
    modal.result.then(
      this.handleModalTodoFormClose.bind(this),
      this.handleModalTodoFormClose.bind(this)
    );
    modal.componentInstance.createMode = false;
    modal.componentInstance.activitytoEdit = activity;
  }
}
