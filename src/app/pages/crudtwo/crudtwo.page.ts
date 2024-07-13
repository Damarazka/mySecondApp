import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-crudtwo',
  templateUrl: './crudtwo.page.html',
  styleUrls: ['./crudtwo.page.scss'],
})
export class CrudtwoPage implements OnInit {

  items: any[];
  newItemName: string;

  constructor(private itemService: ItemService, private navCtrl: NavController) { 
    this.newItemName = '';
    this.items = [];
  }

  async ionViewDidEnter() {
    this.items = this.itemService.getItems();
  }

  async addItem() {
    if (this.newItemName.trim() !== '') {
      const newItem = { name: this.newItemName, isEditing: false };
      await this.itemService.addItem(newItem);
      this.newItemName = '';
      this.items = this.itemService.getItems();
    }
  }

  async removeItem(item: any) {
    await this.itemService.removeItem(item);
    this.items = this.itemService.getItems();
  }

  editItem(item: any) {
    item.isEditing = true;
  }

  async saveItem(item: any) {
    item.isEditing = false;
    await this.itemService.saveItems();
  }

  navigateToItemDetail(item: any) {
    // Implementasi navigasi ke detail item
  }

  ngOnInit() {
  }
}
