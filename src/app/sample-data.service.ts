import { Injectable } from '@angular/core';

@Injectable()
export class SampleDataService {
  constructor() {}

  public getData(): number[] {
    return [1, 2, 3, 4, 5, 6];
  }
}
