import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {
  items: { key: string, value: any }[] = [];

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    await this.loadItems();
  }

  async loadItems() {
    const keys = await this.storageService.keys();
    this.items = [];
    for (const key of keys) {
      const value = await this.storageService.get(key);
      if (key && value) {
        this.items.push({ key, value });
      }
    }
  }

  async addItem(newKey: string, newValue: string) {
    if (newKey && newValue) {
      await this.storageService.set(newKey, newValue);
      await this.loadItems();
    }
  }

  async removeItem(key: string) {
    await this.storageService.remove(key);
    await this.loadItems();
  }
}