import { Component } from '@angular/core';
import { DataService } from '../../services/dataSetterGetter/data.service';

@Component({
  selector: 'app-data-setter',
  templateUrl: './data-setter.component.html',
  styleUrl: './data-setter.component.scss'
})
export class DataSetterComponent {

  data:string = '';

  constructor(private dataService: DataService) {}

  setData() {
    this.dataService.setData(this.data);
  }

}
