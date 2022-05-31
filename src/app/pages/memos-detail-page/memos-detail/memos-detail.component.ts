import { Component, OnInit } from '@angular/core';
import { MemosService } from 'src/app/service/memos.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Memo } from 'src/app/model/memo';
@Component({
  selector: 'app-memos-detail',
  templateUrl: './memos-detail.component.html',
  styleUrls: ['./memos-detail.component.css'],
})
export class MemosDetailComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    title: '',
    content: '',
  });
  memo: Memo = <Memo>{};
  constructor(
    public memosService: MemosService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  onSubmit(): void {
    this.memosService.addMemo(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
  getMemo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.memosService.getMemo(id.toString()).subscribe((e: any) => {
        this.memo = { ...e.data(), id };
      });
    }
  }
  ngOnInit(): void {
    this.getMemo();
  }
  submitStudentData() {}
}
