import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChambreComponent } from './update-chambre.component';

describe('UpdateChambreComponent', () => {
  let component: UpdateChambreComponent;
  let fixture: ComponentFixture<UpdateChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChambreComponent]
    });
    fixture = TestBed.createComponent(UpdateChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
