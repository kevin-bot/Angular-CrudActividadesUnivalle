import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Actividad } from '../modelo/actividad';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private db: AngularFirestore) { }

  private todoCollectionName = 'todos';

  getActivity(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<Actividad>(this.todoCollectionName, ref => ref.orderBy('lastModifiedDate', 'desc')).get();
  }

  saveActivity(todo: Actividad): Promise<DocumentReference> {
    return this.db.collection(this.todoCollectionName).add(todo);
  }
}
