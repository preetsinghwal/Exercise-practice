import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/itemService/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit{

  items: string[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit() : void {
    this.items = this.itemService.getItems();
  }

}
