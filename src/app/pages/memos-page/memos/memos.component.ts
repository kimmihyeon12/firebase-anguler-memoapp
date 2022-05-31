import { Component, OnInit } from '@angular/core';
import { Memo } from 'src/app/model/memo';
import { AuthService } from 'src/app/service/auth.service';
import { MemosService } from 'src/app/service/memos.service';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css'],
})
export class MemosComponent implements OnInit {
  public memos: Memo[] = [];
  constructor(
    public authService: AuthService,
    public memosService: MemosService
  ) {}

  ngOnInit(): void {
    this.memosService.getMemos().subscribe((ss) => {
      ss.docs.forEach((doc: any) => {
        this.memos.push({ ...doc.data(), id: doc.id });
      });
    });
  }
}
