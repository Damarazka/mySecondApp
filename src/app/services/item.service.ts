import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items : any [] = []
  private storageKey = 'items'

  constructor() {
    this.loadItems()
  }

  async loadItems(){
    const { value } = await Preferences.get({ key: this.storageKey });
    this.items = value ? JSON.parse(value) : [];
  }

  async saveItems() {
    await Preferences.set({
      key: this.storageKey,
      value: JSON.stringify(this.items),
    });
  }

  getItems() : any[] {
    return this.items
  }

  async addItem(item : any) : Promise<void>{
    this.items.push(item)
    await this.saveItems()
  }

  async removeItem(item: any): Promise<void> {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      await this.saveItems();
    }
  }
}
