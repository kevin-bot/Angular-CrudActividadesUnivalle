import { Component, OnInit } from '@angular/core';
import {Actividad} from '../../../modelo/actividad';

import {ServiceService} from '../../../services/service.service';
import { DocumentReference } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TodoFormComponent } from '../../todo-form/todo-form.component';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent {
  constructor(private modalService: NgbModal, private todoService: ServiceService) { }

  activitySelect = '';

  ngOnInit() {
  }

  clickAddTodo() {
      const modal = this.modalService.open(TodoFormComponent);
      modal.result.then(
        this.handleModalTodoFormClose.bind(this),
        this.handleModalTodoFormClose.bind(this)
      );
  }

  setactivitySelect(activitySelect) {
    this.activitySelect = activitySelect;
  }

  handleModalTodoFormClose() {  }
}
