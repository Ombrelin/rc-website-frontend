import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertEditDialogComponent } from './concert-edit-dialog.component';

describe('ConcertEditDialogComponent', () => {
  let component: ConcertEditDialogComponent;
  let fixture: ComponentFixture<ConcertEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcertEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcertEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
