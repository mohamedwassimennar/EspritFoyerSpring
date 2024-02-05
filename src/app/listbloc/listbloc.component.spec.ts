import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListblocComponent } from './listbloc.component';

describe('ListblocComponent', () => {
  let component: ListblocComponent;
  let fixture: ComponentFixture<ListblocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListblocComponent]
    });
    fixture = TestBed.createComponent(ListblocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
