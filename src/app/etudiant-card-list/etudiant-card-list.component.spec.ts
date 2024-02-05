import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantCardListComponent } from './etudiant-card-list.component';

describe('EtudiantCardListComponent', () => {
  let component: EtudiantCardListComponent;
  let fixture: ComponentFixture<EtudiantCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantCardListComponent]
    });
    fixture = TestBed.createComponent(EtudiantCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
