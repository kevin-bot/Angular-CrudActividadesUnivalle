import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Actividad } from 'src/app/modelo/actividad';
import { DocumentReference } from '@angular/fire/firestore';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public activeModal: NgbActiveModal,
              private todoService: ServiceService) { }

  @Input() categorySelect = 'Deporte';
  
  ngOnInit() {
     this.todoForm = this.formBuilder.group({ // this todoForm is in the .html file
        category: [this.categorySelect, Validators.required],
        title: ['', Validators.required], // validate the title fiels so that it is not empty
        description: ['', Validators.required], // validate the description fiels so that it is not empty
        date: ['', Validators.required],
        time: ['', Validators.required],
        place: ['', Validators.required],
     });
  }

  public setCategory(category) {
    this.categorySelect = category;
  }
  saveTodo() {
    // validate the form
    if (this.todoForm.invalid) {
      return;
    }

    let activity: Actividad = this.todoForm.value;
    activity.lastModifiedDate = new Date();
    activity.createDate = new Date();
    this.todoService.saveTodo(activity)
          .then(response => this.handleSuccessfulSaveTodo(response, activity))
          .catch(err => console.error(err));
  }

  handleSuccessfulSaveTodo(response: DocumentReference , activity: Actividad){
    this.activeModal.dismiss({ activity: activity, id: response.id});
  }
}
