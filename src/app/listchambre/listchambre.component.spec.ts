import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchambreComponent } from './listchambre.component';

describe('ListchambreComponent', () => {
  let component: ListchambreComponent;
  let fixture: ComponentFixture<ListchambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListchambreComponent]
    });
    fixture = TestBed.createComponent(ListchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
