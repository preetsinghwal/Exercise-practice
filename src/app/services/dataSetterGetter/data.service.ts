import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:string = '';

  constructor() { }

  setData(data:string) {
    this.data = data;
  }

  getData(): string {
    return this.data;
  }
}
