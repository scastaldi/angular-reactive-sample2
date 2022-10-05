import { Component, OnInit, VERSION } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { SampleDataService } from './sample-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _sampleData: SampleDataService) {}

  ngOnInit(): void {
    from(this._sampleData.getData()).subscribe((item) => {
      console.log(item);
    });

    // from(this._sampleData.getData()).subscribe({
    //   next: (item) => console.log(`resulting item... ${item}`),
    //   error: (item) => console.log(`error item... ${item}`),
    //   complete: () => console.log('complete!'),
    // });
  }
  name = 'Tampacc 2022 - Sample2';
}
