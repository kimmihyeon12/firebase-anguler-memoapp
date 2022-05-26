import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css'],
})
export class MemosComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
