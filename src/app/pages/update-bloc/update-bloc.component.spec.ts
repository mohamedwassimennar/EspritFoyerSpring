import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlocComponent } from './update-bloc.component';

describe('UpdateBlocComponent', () => {
  let component: UpdateBlocComponent;
  let fixture: ComponentFixture<UpdateBlocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateBlocComponent]
    });
    fixture = TestBed.createComponent(UpdateBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
