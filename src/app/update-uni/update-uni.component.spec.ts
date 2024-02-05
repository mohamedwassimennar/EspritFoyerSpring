import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniComponent } from './update-uni.component';

describe('UpdateUniComponent', () => {
  let component: UpdateUniComponent;
  let fixture: ComponentFixture<UpdateUniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUniComponent]
    });
    fixture = TestBed.createComponent(UpdateUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
