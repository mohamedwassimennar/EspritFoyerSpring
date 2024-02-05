import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQrCodeComponent } from './user-qr-code.component';

describe('UserQrCodeComponent', () => {
  let component: UserQrCodeComponent;
  let fixture: ComponentFixture<UserQrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserQrCodeComponent]
    });
    fixture = TestBed.createComponent(UserQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
