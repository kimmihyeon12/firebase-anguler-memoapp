import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class MemosService {
  constructor(
    private messageService: MessageService,
    private db: AngularFireDatabase
  ) {}
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  getMemos() {}
  getMemo() {}
  addMemo() {}
  updateMemo() {}
  deleteMemo() {}
}
