import { TestBed } from '@angular/core/testing';
import { BlocService } from './BlocService';


describe('BlocService', () => {
  let service: BlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});