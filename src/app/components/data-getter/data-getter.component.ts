import { Component } from '@angular/core';
import { DataService } from '../../services/dataSetterGetter/data.service';

@Component({
  selector: 'app-data-getter',
  templateUrl: './data-getter.component.html',
  styleUrl: './data-getter.component.scss'
})
export class DataGetterComponent {
  comingData: string = '';

  constructor(private dataService: DataService) {}

  ngOnChanges(): void {
    console.log("ngOnInit called");
    this.comingData = this.dataService.getData();
  }

  ngDoCheck(): void {
    /* Inefficient approach, as in this case ngDoCheck will run on every change detection.
       Instead of this, we can make a service in which we can use behaviourSubject and create
       getter and setter method there and subscribe to them which lead to trigger only if new change detect.
    */
    console.log("ngDoCheck called");
    this.comingData = this.dataService.getData();
  }

}
