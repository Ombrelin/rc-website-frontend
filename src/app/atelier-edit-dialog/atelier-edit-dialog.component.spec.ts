import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierEditDialogComponent } from './atelier-edit-dialog.component';

describe('AtelierEditDialogComponent', () => {
  let component: AtelierEditDialogComponent;
  let fixture: ComponentFixture<AtelierEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
