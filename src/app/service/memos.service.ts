import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Memo } from '../model/memo';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class MemosService {
  public result?: Observable<Memo[]>;
  constructor(
    private messageService: MessageService,
    private db: AngularFirestore
  ) {}
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  getMemos() {
    return this.db.collection('memo').get();
  }
  getMemo(id?: string) {
    return this.db.collection('memo').doc(id).get();
  }
  addMemo(memoForm: Memo) {
    new Promise<any>((resolve, reject) => {
      this.db
        .collection('memo')
        .add(memoForm)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
  updateMemo(memoForm: Memo) {
    new Promise<any>((resolve, reject) => {
      this.db
        .collection('memo')
        .doc(memoForm.id)
        .update(memoForm)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }
  deleteMemo() {}
}
