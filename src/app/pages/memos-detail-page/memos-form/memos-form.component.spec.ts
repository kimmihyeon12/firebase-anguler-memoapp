import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemosFormComponent } from './memos-form.component';

describe('MemosFormComponent', () => {
  let component: MemosFormComponent;
  let fixture: ComponentFixture<MemosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
