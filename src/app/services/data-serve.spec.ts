import { TestBed } from '@angular/core/testing';
import { DataServe } from './data-serve';

describe('DataServe', () => {
  let service: DataServe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServe);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
