import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemosDetailComponent } from './memos-detail.component';

describe('MemosDetailComponent', () => {
  let component: MemosDetailComponent;
  let fixture: ComponentFixture<MemosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemosDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
