import { ChambreService } from './ChambreService';
import { TestBed } from '@angular/core/testing';


describe('ChambreService', () => {
  let service: ChambreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChambreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});