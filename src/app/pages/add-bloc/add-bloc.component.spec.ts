import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlocComponent } from './add-bloc.component';

describe('AddBlocComponent', () => {
  let component: AddBlocComponent;
  let fixture: ComponentFixture<AddBlocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBlocComponent]
    });
    fixture = TestBed.createComponent(AddBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
