import { Component, OnInit, VERSION } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
export class Sample1 {
  data = [1, 2, 3, 4];

  ngOnInit(): void {
    of(this.data).subscribe((item) => {
      console.log(item);
    });

    from(this.data).subscribe({
      next: (item) => console.log(`resulting item... ${item}`),
      error: (item) => console.log(`error item... ${item}`),
      complete: () => console.log('complete!'),
    });
  }
  name = 'Angular ' + VERSION.major;

  // const apple2$ = of('Apple 1', 'Apple 2');
  // const apple3$ = from(['apple1', 'apple2']);
}
