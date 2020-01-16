import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Actividad } from 'src/app/modelo/actividad';
import { DocumentReference } from '@angular/fire/firestore';
import { ActividadView } from 'src/app/modelo/actividad-view';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  createMode: boolean = true;
  activitytoEdit: ActividadView;

  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal,
              private todoService: ServiceService) { }

  @Input() categorySelect = '¿?';

  ngOnInit() {
     this.todoForm = this.formBuilder.group({ // this todoForm is in the .html file
        titulo: ['', Validators.required], // validate the title fiels so that it is not empty
        descripcion: ['', Validators.required], // validate the description fiels so that it is not empty
        fecha: ['', Validators.required],
        hora: ['', Validators.required],
        lugar: ['', Validators.required],
     });

     if (!this.createMode) {
        this.loadActivity(this.activitytoEdit);
     }

     console.log(this.activitytoEdit)
  }

  public setCategory(category) {
    this.categorySelect = category;
  }
  saveTodo() {
    // validate the form
    if (this.todoForm.invalid) {
      return;
    }
    if (this.createMode) {
      if (this.categorySelect !== '¿?') {
        let activity: Actividad = this.todoForm.value;
        activity.lastModifiedDate = new Date();
        activity.createDate = new Date();
        activity.categoria = this.categorySelect;
        this.todoService.saveTodo(activity)
              .then(response => this.handleSuccessfulSaveTodo(response, activity))
              .catch(err => console.error(err));
      } else {alert('Seleccione una Categoria de (Deporte,Cultura, Éxito Académico o Diversidad)')}
    } else {
      let todo: ActividadView = this.todoForm.value;
      todo.id = this.activitytoEdit.id;
      todo.lastModifiedDate = new Date();
      this.todoService.editTodo(todo).then(() => this.handleSuccessfulEditTodo(todo))
      .catch(err => console.log(err));
    }

  }

  handleSuccessfulSaveTodo(response: DocumentReference , activity: Actividad) {
    this.activeModal.dismiss({ activity: activity, id: response.id});
  }

  handleSuccessfulEditTodo(todo) {
    this.activeModal.dismiss({activity: todo , id: todo.id, createMode: false});
  }
  loadActivity(myactivitytoEdit) {
    this.todoForm.patchValue(myactivitytoEdit);
  }
}
