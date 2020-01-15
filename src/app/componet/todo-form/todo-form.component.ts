import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal,
              private todoService: ServiceService) { }

  ngOnInit() {
     this.todoForm = this.formBuilder.group({ // this todoForm is in the .html file
        title: ['', Validators.required], // validate the title fiels so that it is not empty
        description: ['', Validators.required], // validate the description fiels so that it is not empty
        done: false // the fiels done is not being validate
     });
  }
  saveTodo() {
    // validate the form
    if (this.todoForm.invalid) {
      return;
    }

    let todo: Todo = this.todoForm.value;
    todo.lastModifiedDate = new Date();
    todo.createDate = new Date();
    this.todoService.saveTodo(todo)
          .then(response => this.handleSuccessfulSaveTodo(response, todo))
          .catch(err => console.error(err));
  }

  handleSuccessfulSaveTodo(response: DocumentReference, todo: Todo){
    this.activeModal.dismiss({ todo: todo, id: response.id});
  }
}
